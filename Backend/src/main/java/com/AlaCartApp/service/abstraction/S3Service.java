package com.AlaCartApp.service.abstraction;

import com.AlaCartApp.models.entity.Image;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

public interface S3Service {

    List<Image> uploadFile(List<MultipartFile> file) throws IOException;
}
