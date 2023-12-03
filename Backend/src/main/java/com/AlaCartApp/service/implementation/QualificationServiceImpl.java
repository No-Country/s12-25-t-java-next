package com.AlaCartApp.service.implementation;

import com.AlaCartApp.models.entity.Product;
import com.AlaCartApp.models.entity.Qualification;
import com.AlaCartApp.repository.ProductRepository;
import com.AlaCartApp.repository.QualificationRepository;
import com.AlaCartApp.service.abstraction.QualificationService;
import jakarta.persistence.EntityNotFoundException;
import jakarta.transaction.Transactional;
import java.util.ArrayList;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author WilderVlz
 */
@Service
@Transactional
public class QualificationServiceImpl implements QualificationService {

    @Autowired
    private ProductRepository productRepository;

    @Autowired
    private QualificationRepository qualificationRepository;

    @Override
    public List<Integer> rateProduct(Qualification qualification) {
        try {
            validateQualification(qualification);

            Product product = getProductById(qualification.getProduct().getId());
            product.getQualifications().add(qualification);
            List<Qualification> ratings = product.getQualifications();
            List<Integer> progressiveRating = calculateProgressiveRating(ratings);

            qualification.setProduct(product);
            this.qualificationRepository.save(qualification);

            return progressiveRating;
        } catch (IllegalArgumentException e) {
            e.printStackTrace();
            throw e;
        } catch (EntityNotFoundException e) {
            e.printStackTrace();
            throw e;
        } catch (Exception e) {
            e.printStackTrace();
            throw new RuntimeException("An error occurred while processing the request.", e);
        }
    }

    private void validateQualification(Qualification qualification) {
        if (qualification.getScore() < 1 || qualification.getScore() > 5) {
            throw new IllegalArgumentException("Invalid score. Score must be between 1 and 5.");
        }
    }

    private Product getProductById(Long productId) {
        return this.productRepository.findById(productId)
                .orElseThrow(() -> new EntityNotFoundException("Product not found with id: " + productId));
    }

    private Product getProductByName(String productName) {
        Product product = this.productRepository.findByName(productName);

        if (product == null) {
            throw new EntityNotFoundException("Product not found with name:" + productName);
        }
        return product;
    }

    private List<Integer> calculateProgressiveRating(List<Qualification> ratings) {
        List<Integer> progressiveRating = new ArrayList<>();
        int initialRating = 0;

        for (Qualification rating : ratings) {
            initialRating += rating.getScore();
            progressiveRating.add(initialRating);
            System.out.println(initialRating);
        }

        return progressiveRating;
    }

    @Override
    public List<Integer> getRateById(Long productId) {
        Product product = getProductById(productId);
        List<Qualification> ratings = product.getQualifications();
        return calculateProgressiveRating(ratings);
    }

    @Override
    public List<Integer> getRateByName(String productName) {
        Product product = getProductByName(productName);
        List<Qualification> ratings = product.getQualifications();
        return calculateProgressiveRating(ratings);
    }

}
