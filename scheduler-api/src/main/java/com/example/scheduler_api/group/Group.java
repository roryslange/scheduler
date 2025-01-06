package com.example.scheduler_api.group;

import com.example.scheduler_api.user.User;
import jakarta.persistence.*;

import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "groups")
public class Group {
    @Id
    @Column(name = "group_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToMany(
            cascade = CascadeType.ALL,
            fetch = FetchType.EAGER
    )
    @JoinTable(
            name = "group_user_xref",
            joinColumns = @JoinColumn(
                    name = "group_id",
                    referencedColumnName = "group_id"
            ),
            inverseJoinColumns = @JoinColumn(
                    name = "user_id",
                    referencedColumnName = "user_id"
            )
    )
    private List<User> members;

    public Group() {}

    public void addMember(User user) {
        if (members == null)
            members = new ArrayList<>();

        members.add(user);
    }


}
