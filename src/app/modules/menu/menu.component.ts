import { Component, OnInit, HostListener, TemplateRef } from '@angular/core';
import { NzTreeNode, NzDropdownContextComponent, NzDropdownService, NzFormatEmitEvent, NzModalService } from 'ng-zorro-antd';
import { routerTransition } from '../../router.animations';
import { MenuFormComponent } from './menu-form/menu-form.component';
import { MpI18nService } from '../../i18n/mp-i18n.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  animations: [routerTransition()]
})
export class MenuComponent implements OnInit {

  constructor(
    private nzDropdownService: NzDropdownService,
    private modalService: NzModalService,
    private i18nService: MpI18nService
  ) { }

  ngOnInit() {
  }

  dropdown: NzDropdownContextComponent;
  // can active only one node
  activedNode: NzTreeNode;
  dragNodeElement;

  searchValue;
  nodes = [
    new NzTreeNode({
      title: 'root1',
      key: '1001',
      children: [
        {
          title: 'child1',
          key: '10001',
          children: [
            {
              title: 'child1.1',
              key: '100011',
              children: []
            },
            {
              title: 'child1.2',
              key: '100012',
              checked: true,
              children: [
                {
                  title: 'grandchild1.2.1',
                  key: '1000121',
                  isLeaf: true
                }
              ]
            }
          ]
        },
        {
          title: 'child2',
          key: '10002',
          isLeaf: true
        }
      ]
    }),
    new NzTreeNode({
      title: 'root2',
      key: '1002',
      children: [
        {
          title: 'child2.1',
          key: '10021',
          children: []
        },
        {
          title: 'child1.2',
          key: '10022',
          selectable: false,
          children: [
            {
              title: 'grandchild2.2.1',
              key: '100221',
              isLeaf: true
            }
          ]
        }
      ]
    })
  ];

  @HostListener('mouseleave', ['$event'])
  mouseLeave(event: MouseEvent): void {
    event.preventDefault();
    if (this.dragNodeElement && this.dragNodeElement.className.indexOf('is-dragging') > -1) {
      this.dragNodeElement.className = this.dragNodeElement.className.replace(' is-dragging', '');
    }
  }

  @HostListener('mousedown', ['$event'])
  mouseDown(): void {
    // do not prevent
    if (this.dragNodeElement && this.dragNodeElement.className.indexOf('is-dragging') > -1) {
      this.dragNodeElement.className = this.dragNodeElement.className.replace(' is-dragging', '');
    }
  }

  /**
   * important:
   * if u want to custom event/node properties, u need to maintain the selectedNodesList/checkedNodesList yourself
   * @param {} data
   */
  openFolder(data: NzTreeNode | NzFormatEmitEvent): void {
    // do something if u want
    if (data instanceof NzTreeNode) {
      // change node's expand status
      if (!data.isExpanded) {
        // close to open
        data.origin.isLoading = true;
        setTimeout(() => {
          data.isExpanded = !data.isExpanded;
          data.origin.isLoading = false;
        }, 500);
      } else {
        data.isExpanded = !data.isExpanded;
      }
    } else {
      // change node's expand status
      if (!data.node.isExpanded) {
        // close to open
        data.node.origin.isLoading = true;
        setTimeout(() => {
          data.node.isExpanded = !data.node.isExpanded;
          data.node.origin.isLoading = false;
        }, 500);
      } else {
        data.node.isExpanded = !data.node.isExpanded;
      }
    }
  }

  // 选中节点
  activeNode(data: NzFormatEmitEvent): void {
    if (this.activedNode) {
      this.activedNode = null;
    }
    data.node.isSelected = true;
    this.activedNode = data.node;
  }

  dragStart(event: NzFormatEmitEvent): void {
    // disallow drag if root or search
    this.activedNode = null;
    this.dragNodeElement = event.event.srcElement;
    if (this.dragNodeElement.className.indexOf('is-dragging') === -1) {
      this.dragNodeElement.className = event.event.srcElement.className + ' is-dragging';
    }
  }

  contextMenu($event: MouseEvent, template: TemplateRef<void>, node: NzTreeNode): void {
    this.dropdown = this.nzDropdownService.create($event, template);
  }

  selectDropdown(): void {
    this.dropdown.close();
    // do something
    console.log('dropdown clicked');
  }
  mouseAction(name: string, e: any): void {
    console.log(name, e);
  }

  showMenuFormModal(): void {
    this.dropdown.close();

    const modal = this.modalService.create({
      nzTitle: 'Modal Title',
      nzContent: MenuFormComponent,
      nzComponentParams: {
        title: 'title in component',
        subtitle: 'component sub title，will be changed after 2 sec'
      },
      nzFooter: [{
        label: this.i18nService.translate('base.Confirm'),
        type: 'primary',
        disabled: ((menuForm) => !menuForm.validateForm.valid),
        onClick: (menuForm) => {
          menuForm.submitForm(menuForm.validateForm.value);
        }
      }, {
        label: 'Reset',
        onClick: (menuForm) => {
          menuForm.resetForm();
        }
      }, {
        label: 'Close',
        onClick: () => modal.destroy()
      }],
      nzMaskClosable: false
    });

    modal.afterOpen.subscribe(() => console.log('[afterOpen] emitted!'));

    // Return a result when closed
    modal.afterClose.subscribe((result) => console.log('[afterClose] The result is:', result));

    // delay until modal instance created
    // window.setTimeout(() => {
    //   const instance = modal.getContentComponent();
    //   instance.subtitle = 'sub title is changed';
    // }, 2000);
  }
}
