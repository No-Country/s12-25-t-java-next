package com.AlaCartApp.service.implementation;

import com.AlaCartApp.models.entity.Image;
import com.AlaCartApp.service.abstraction.ImageService;
import com.AlaCartApp.service.abstraction.S3Service;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;
@RequiredArgsConstructor
@Service
public class ImageServiceImpl implements ImageService {

    private final S3Service s3Service;

    @Override
    public List<Image> imagesPost(List<MultipartFile> postImagep) throws IOException {
        List<Image> images = s3Service.uploadFile(postImagep);
        return images;
    }
}
