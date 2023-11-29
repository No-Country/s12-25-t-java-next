package com.AlaCartApp.service.implementation;

import com.AlaCartApp.config.S3Config;
import com.AlaCartApp.models.entity.Image;
import com.AlaCartApp.service.abstraction.S3Service;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import software.amazon.awssdk.core.sync.RequestBody;
import software.amazon.awssdk.services.s3.S3Client;
import software.amazon.awssdk.services.s3.model.GetUrlRequest;
import software.amazon.awssdk.services.s3.model.PutObjectRequest;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

@RequiredArgsConstructor
@Service
public class S3ServiceImpl implements S3Service {

    private final S3Client s3Client;

    @Value("${aws.s3.bucket}")
    private String bucket;
    @Override
    public List<Image> uploadFile(List<MultipartFile> file) throws IOException {
        try {
            List<Image> list = new ArrayList<>();
            for (MultipartFile files: file
            ) {
                String filename = files.getOriginalFilename();
                PutObjectRequest putObjectRequest = PutObjectRequest.builder()
                        .bucket(bucket)
                        .key(filename)
                        .build();
                s3Client.putObject(putObjectRequest, RequestBody.fromBytes(files.getBytes()));
                String imageUrl = s3Client.utilities().getUrl(GetUrlRequest.builder().bucket(bucket).key(filename).build()).toExternalForm();
                Image image = new Image();
                image.setImageUrl(imageUrl);
                list.add(image);
            }
            return list;
        }catch (IOException e){
            throw new IOException(e.getMessage());
        }
    }
}
