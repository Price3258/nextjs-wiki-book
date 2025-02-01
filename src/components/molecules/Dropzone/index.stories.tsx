import { Meta, StoryObj } from '@storybook/react';
import React, { useState, useEffect } from 'react';
import Dropzone from './index';
import Button from '@/components/atoms/Button';
import Box from '@/components/layout/Box';

const meta: Meta<typeof Dropzone> = {
  title: 'Molecules/Dropzone',
  component: Dropzone,
  argTypes: {
    height: {
      control: { type: 'number' },
      description: '세로폭',
      table: {
        type: { summary: 'number' },
      },
    },
    width: {
      control: { type: 'text' },
      description: '가로폭',
      table: {
        type: { summary: 'string | number' },
      },
    },
    hasError: {
      control: { type: 'boolean' },
      description: '에러 상태 플래그',
      table: {
        type: { summary: 'boolean' },
      },
    },
    acceptedFileTypes: {
      control: { type: 'object' },
      description: '허용된 파일 타입',
      table: {
        // type: { summary: 'string[]' },
        table: { type: { summary: '{ value: string; label: string }[]' } },
      },
    },
    onDrop: {
      action: 'dropped', // 스토리북 액션 패널에서 확인 가능
      description: '파일이 드롭될 때 실행되는 이벤트 핸들러',
      table: {
        type: { summary: '(files: File[]) => void' },
      },
    },
    onChange: {
      action: 'changed',
      description: '파일이 변경될 때 실행되는 이벤트 핸들러',
      table: {
        type: { summary: '(files: File[]) => void' },
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Dropzone>;

const Template = (args: any) => {
  const [files, setFiles] = useState<File[]>([]);

  const handleDrop = (droppedFiles: File[]) => {
    setFiles(droppedFiles);
    args.onDrop?.(droppedFiles);
  };

  const fetchData = async () => {
    const res = await fetch('/images/sample/1.jpg');
    const blob = await res.blob();
    const file = new File([blob], '1.png', { type: blob.type });

    setFiles((prevFiles) => [...prevFiles, file]);
  };

  const clearImages = () => {
    setFiles([]);
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Box marginBottom={1}>
        <Dropzone {...args} value={files} onDrop={handleDrop} />
      </Box>
      <Box marginBottom={1}>
        <Button onClick={fetchData}>이미지 추가</Button>
      </Box>
      <Box marginBottom={2}>
        <Button onClick={clearImages}>모든 이미지 클리어</Button>
      </Box>
      <Box>
        {files.map((file, index) => (
          <img
            src={URL.createObjectURL(file)}
            width="100px"
            key={index}
            alt="sample"
          />
        ))}
      </Box>
    </>
  );
};

export const WithControl: Story = {
  args: {
    height: 200,
    width: '100%',
    acceptedFileTypes: ['image/png', 'image/jpeg', 'image/jpg', 'image/gif'],
    hasError: false,
  },
  render: Template, // StoryObj 방식에서 `render`를 사용하여 Template 연결
};
