from django.db import models
from django.core.validators import (
    RegexValidator,
    MinValueValidator,
    MaxValueValidator,
)
from django.utils.translation import gettext_lazy as _

# -------------------------------------------
#  Stol (Table)
# -------------------------------------------
class Table(models.Model):
    number = models.PositiveIntegerField(unique=True, db_index=True)
    capacity = models.PositiveIntegerField(validators=[MinValueValidator(1)])

    CATEGORY_CHOICES = [
        ("standard", "Standard"),
        ("vip", "VIP"),
        ("terrace", "Terrace"),
        ("panorama", "Panorama"),
    ]
    category = models.CharField(
        max_length=20, choices=CATEGORY_CHOICES, default="standard"
    )
    extra_fee = models.DecimalField(
        max_digits=8,
        decimal_places=2,
        default=0,
        validators=[MinValueValidator(0)],
    )

    def __str__(self):
        return f"Table {self.number} ({self.capacity} people, {self.get_category_display()})"


# -------------------------------------------
#  Vaqt slotlari (har 30 min, kechki va kunduzgi)
# -------------------------------------------
TIME_SLOTS = [
    ("12:00", "12:00"),
    ("12:30", "12:30"),
    ("13:00", "13:00"),
    ("13:30", "13:30"),
    ("18:00", "18:00"),
    ("18:30", "18:30"),
    ("19:00", "19:00"),
    ("19:30", "19:30"),
    ("20:00", "20:00"),
]


# -------------------------------------------
#  Rezervatsiya (Reservation)
# -------------------------------------------
class Reservation(models.Model):
    STATUS_PENDING = "pending"
    STATUS_CONFIRMED = "confirmed"
    STATUS_CANCELLED = "cancelled"
    STATUS_FINISHED = "finished"

    STATUS_CHOICES = [
        (STATUS_PENDING, "Pending"),
        (STATUS_CONFIRMED, "Confirmed"),
        (STATUS_CANCELLED, "Cancelled"),
        (STATUS_FINISHED, "Finished"),
    ]

    name = models.CharField(max_length=100)
    # phone = models.CharField(
    #     max_length=20,
    #     validators=[
    #         RegexValidator(
    #             regex=r"^\+?[1-9]\d{8,14}$", message=_("Invalid phone number")
    #         )
    #     ],
    # )
    phone = models.CharField(max_length=20)

    date = models.DateField()
    time = models.CharField(max_length=5, choices=TIME_SLOTS)
    people = models.PositiveIntegerField(validators=[MinValueValidator(1)])
    tables = models.ManyToManyField(Table, related_name="reservations")

    note = models.TextField(blank=True, null=True)
    status = models.CharField(
        max_length=20, choices=STATUS_CHOICES, default=STATUS_PENDING
    )
    created_at = models.DateTimeField(auto_now_add=True)

    rating = models.PositiveSmallIntegerField(
        null=True,
        blank=True,
        validators=[MinValueValidator(1), MaxValueValidator(5)],
    )

    class Meta:
        ordering = ["-created_at"]
        indexes = [
            models.Index(fields=["phone", "created_at"]),
        ]

    def __str__(self):
        return f"{self.name} ({self.date} {self.time}) - {self.status}"