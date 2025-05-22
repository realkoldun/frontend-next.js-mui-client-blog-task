import { createContext } from 'react';

import { PostType } from '@/types';

export const PostContext = createContext<PostType | null>(null);
