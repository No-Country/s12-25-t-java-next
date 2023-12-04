package com.AlaCartApp.service.abstraction;

import com.AlaCartApp.models.entity.Qualification;
import java.util.List;

/**
 *
 * @author WilderVlz
 */
public interface QualificationService {

    List<Integer> rateProduct(Qualification qualification);
    List<Integer> getRateById(Long productId);
    List<Integer> getRateByName(String productName);

}
