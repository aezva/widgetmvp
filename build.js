#!/usr/bin/env node

import { build } from 'vite';

try {
  console.log('Starting build...');
  
  await build({
    mode: 'production'
  });
  
  console.log('Build completed successfully!');
} catch (error) {
  console.error('Build failed:', error);
  process.exit(1);
} 