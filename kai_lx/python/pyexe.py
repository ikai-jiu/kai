class Process(models.Model):


    """
    """
name = models.CharField(_('name'), max_length=255)
is_template = models.BooleanField(default=False)
status = models.CharField(max_length=30)
flow = models.OneToOneField(ProcessTaskSet)



def __unicode__(self):
    return self.name


class Meta:
    verbose_name = _("process")