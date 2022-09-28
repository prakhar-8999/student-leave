import { UploadOutlined } from '@ant-design/icons';
import { Button, message, Upload } from 'antd';
import React, { useEffect, useState } from 'react';
import apihit from '../static/axios';

const Uploaddata = () => {


    const [type, settype] = useState('');


    const [fileList, setFileList] = useState([]);
    const [uploading, setUploading] = useState(false);
    const [rank, setrank] = useState(null);
    const handleUpload = () => {
        const formData = new FormData();
        // fileList.forEach((file) => {
        formData.append('file', fileList[0]);

        formData.append('id', localStorage.getItem('id'));
        // if (rank !== null) {
        formData.append('rank', rank);
        // }
        // });
        setUploading(true); // You can use any AJAX library you like

        apihit.post('api/upload', formData)
            .then(res => {
                setFileList([]);
                console.log(res)
                setrank(null)
                message.success('upload successfully.');
                setUploading(false);
            })
            .catch(err => {
                message.error('upload failed.');
                setUploading(false);
            })
            .finally(() => {
                setUploading(false);
            });
    };

    const props = {
        onRemove: (file) => {
            const index = fileList.indexOf(file);
            const newFileList = fileList.slice();
            newFileList.splice(index, 1);
            setFileList(newFileList);
        },
        beforeUpload: (file) => {
            setFileList([...fileList, file]);
            return false;
        },
        fileList,
    };


    useEffect(() => {
        settype(localStorage.getItem('type'))
    }, [])


    return (
        <div>

            <h1 class='text-2xl font-extrabold'>Upload Documents</h1>
            <h1 class='text-2xl text-center font-bold' style={{ display: type === 'medical' ? 'block' : 'none' }}>Submit your Medical certificate</h1>
            <h1 class='text-2xl text-center font-bold' style={{ display: type === 'event' ? 'block' : 'none' }}>Submit your Event Details</h1>
            <br />
            <div style={{ display: type === 'event' ? 'block' : 'none' }}>
                <label for="rank" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Rank (&nbsp;&nbsp;if Any&nbsp;&nbsp;)</label>
                <input type="number" onChange={e => setrank(e.target.value)} id="rank" aria-describedby="helper-text-explanation" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter your Rank" />
            </div>
            <br /><br />
            <Upload {...props}>
                <Button icon={<UploadOutlined />} style={{ width: '100%' }}>Select File</Button>
            </Upload>
            <br />
            <Button
                type="primary"
                onClick={handleUpload}
                disabled={fileList.length !== 1}
                loading={uploading}
                style={{
                    marginTop: 16,
                    width: '100%',
                    height: '1cm'
                }}
            >
                {uploading ? 'Uploading' : 'Submit'}
            </Button>
        </div>
    )
}

export default Uploaddata