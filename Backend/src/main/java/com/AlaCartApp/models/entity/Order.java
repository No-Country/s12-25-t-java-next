package com.AlaCartApp.models.entity;

import com.AlaCartApp.enums.State;
import jakarta.persistence.*;

import java.time.LocalDateTime;
import java.util.List;
import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Table(name = "orders")
@Entity(name = "Order")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(of = "id")
public class Order {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @ManyToOne
    @JoinColumn(name = "table_entity_id", nullable = false)
    private TableEntity tableEntity;
    private LocalDateTime date;
    private LocalDateTime updated;
    @OneToMany(mappedBy = "order", cascade = CascadeType.ALL)
    private List<OrderDetail> detail;
    private String paymentMethod;
    private Double total;
   /* @Enumerated(EnumType.STRING)
    @Column(name = "state_column")
    private State state;*/

}
