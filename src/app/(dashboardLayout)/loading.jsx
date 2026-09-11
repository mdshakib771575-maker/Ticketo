"use client"
import { Spinner } from '@heroui/react';
import React from 'react';

const LodingPage = () => {
    return (
        <div>
             <div className="flex flex-col items-center gap-2">
        <Spinner size="lg" />
        <span className="text-xs text-muted">Large</span>
      </div>
        </div>
    );
};

export default LodingPage;