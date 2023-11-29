package com.AlaCartApp.service.abstraction;

import com.AlaCartApp.models.entity.Image;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

public interface ImageService {

    List<Image> imagesPost(List<MultipartFile> postImagep) throws IOException;
}
