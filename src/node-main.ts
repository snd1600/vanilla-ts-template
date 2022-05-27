#!/usr/bin/env -S pnpm ts-node
import path from 'path';

console.log(`path.join('a/', '/b/', '/c') => `, path.join('a/', '/b/', '/c'));
