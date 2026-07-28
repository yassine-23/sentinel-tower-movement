'use client';

import React, { useState } from 'react';
import Image, { ImageProps } from 'next/image';
import { motion } from 'framer-motion';

interface OptimizedImageProps extends Omit<ImageProps, 'onLoadingComplete'> {
  skeletonClassName?: string;
}

export default function OptimizedImage({
  src,
  alt,
  className,
  skeletonClassName,
  ...props
}: OptimizedImageProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  return (
    <div className="relative w-full h-full">
      {/* Loading Skeleton */}
      {isLoading && !hasError && (
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className={`absolute inset-0 bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800 bg-[length:200%_100%] animate-shimmer ${
            skeletonClassName || ''
          }`}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-shimmer" />
        </motion.div>
      )}

      {/* Error State */}
      {hasError && (
        <div className="absolute inset-0 flex items-center justify-center bg-slate-800/50 backdrop-blur-sm">
          <div className="text-center p-4">
            <div className="text-4xl mb-2">=¼</div>
            <p className="text-sm text-white/60">Image failed to load</p>
          </div>
        </div>
      )}

      {/* Actual Image */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoading ? 0 : 1 }}
        transition={{ duration: 0.5 }}
        className={className}
      >
        <Image
          src={src}
          alt={alt}
          onLoad={() => setIsLoading(false)}
          onError={() => {
            setIsLoading(false);
            setHasError(true);
          }}
          {...props}
        />
      </motion.div>
    </div>
  );
}
