import { NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';
import { cookies } from 'next/headers';

export async function POST(request: Request) {
  // Authentication check
  const cookieStore = await cookies();
  const token = cookieStore.get('auth-token');
  if (!token || token.value !== 'true') {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const formData = await request.formData();
    const file = formData.get('file') as File | null;
    
    if (!file) {
      return NextResponse.json({ error: 'No file uploaded' }, { status: 400 });
    }

    const buffer = Buffer.from(await file.arrayBuffer());
    
    // Create uploads dir if it doesn't exist
    const publicUploadsDir = path.join(process.cwd(), 'public', 'uploads');
    try {
      await fs.access(publicUploadsDir);
    } catch {
      await fs.mkdir(publicUploadsDir, { recursive: true });
    }

    const fileName = `${Date.now()}-${file.name.replace(/\\s+/g, '-')}`;
    const filePath = path.join(publicUploadsDir, fileName);
    
    await fs.writeFile(filePath, buffer);
    const publicUrl = `/uploads/${fileName}`;

    return NextResponse.json({ success: true, url: publicUrl });
  } catch (error) {
    return NextResponse.json({ error: 'Upload failed' }, { status: 500 });
  }
}
