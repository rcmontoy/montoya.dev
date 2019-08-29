---
path: "/posts/post-with-code-snippets"
date: "2019-08-19"
title: "Post with Code"
---

This is a test post containing sample Python code.

```python
class ProductLine(models.Model):
    slug = models.SlugField(max_length=255, primary_key=True)
    name = models.CharField(max_length=255)

    def __str__(self):
        return self.name

    class Meta:
        db_table = 'product_lines'
        verbose_name_plural = 'Product Lines'
```
