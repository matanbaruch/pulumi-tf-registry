// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class VirtualRouterInstance extends pulumi.CustomResource {
    /**
     * Get an existing VirtualRouterInstance resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: VirtualRouterInstanceState, opts?: pulumi.CustomResourceOptions): VirtualRouterInstance {
        return new VirtualRouterInstance(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'opennebula:index/virtualRouterInstance:VirtualRouterInstance';

    /**
     * Returns true if the given object is an instance of VirtualRouterInstance.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is VirtualRouterInstance {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === VirtualRouterInstance.__pulumiType;
    }

    /**
     * Context variables
     */
    public readonly context!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * Amount of CPU quota assigned to the virtual machine
     */
    public readonly cpu!: pulumi.Output<number>;
    /**
     * Definition of CPU Model type for the Virtual Machine
     */
    public readonly cpumodel!: pulumi.Output<outputs.VirtualRouterInstanceCpumodel | undefined>;
    /**
     * Default tags defined in the provider configuration
     */
    public /*out*/ readonly defaultTags!: pulumi.Output<{[key: string]: string}>;
    /**
     * A description of the entity
     */
    public readonly description!: pulumi.Output<string | undefined>;
    /**
     * Definition of disks assigned to the Virtual Machine
     */
    public readonly disks!: pulumi.Output<outputs.VirtualRouterInstanceDisk[] | undefined>;
    /**
     * ID of the group that will own the resource
     */
    public /*out*/ readonly gid!: pulumi.Output<number>;
    /**
     * Name of the group that will own the resource
     */
    public /*out*/ readonly gname!: pulumi.Output<string>;
    /**
     * Definition of graphics adapter assigned to the Virtual Machine
     */
    public readonly graphics!: pulumi.Output<outputs.VirtualRouterInstanceGraphics | undefined>;
    /**
     * Name of the Group that onws the resource, If empty, it uses caller group
     */
    public readonly group!: pulumi.Output<string | undefined>;
    /**
     * Immediately poweroff/terminate/reboot/undeploy the VM. (default: false)
     */
    public readonly hardShutdown!: pulumi.Output<boolean | undefined>;
    /**
     * Current LCM state of the VM
     */
    public /*out*/ readonly lcmstate!: pulumi.Output<number>;
    /**
     * Lock level of the new resource: USE, MANAGE, ADMIN, ALL, UNLOCK
     */
    public readonly lock!: pulumi.Output<string | undefined>;
    /**
     * Amount of memory (RAM) in MB assigned to the virtual machine
     */
    public readonly memory!: pulumi.Output<number>;
    /**
     * Name of the VM. If empty, defaults to 'templatename-<vmid>'
     */
    public readonly name!: pulumi.Output<string>;
    public readonly onDiskChange!: pulumi.Output<string | undefined>;
    /**
     * Definition of OS boot and type for the Virtual Machine
     */
    public readonly os!: pulumi.Output<outputs.VirtualRouterInstanceOs | undefined>;
    /**
     * Pending state of the VM during its creation, by default it is set to false
     */
    public readonly pending!: pulumi.Output<boolean | undefined>;
    /**
     * Permissions for the resource (in Unix format, owner-group-other, use-manage-admin)
     */
    public readonly permissions!: pulumi.Output<string>;
    /**
     * Low-level hypervisor tuning
     */
    public readonly raw!: pulumi.Output<outputs.VirtualRouterInstanceRaw | undefined>;
    /**
     * Storage placement requirements to deploy the resource following specific rule
     */
    public readonly schedDsRequirements!: pulumi.Output<string | undefined>;
    /**
     * Scheduling requirements to deploy the resource following specific rule
     */
    public readonly schedRequirements!: pulumi.Output<string | undefined>;
    /**
     * Current state of the VM
     */
    public /*out*/ readonly state!: pulumi.Output<number>;
    /**
     * Add custom tags to the resource
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * Result of the applied default_tags and resource tags
     */
    public /*out*/ readonly tagsAll!: pulumi.Output<{[key: string]: string}>;
    /**
     * Disks assigned to the Virtual Machine via a template
     */
    public /*out*/ readonly templateDisks!: pulumi.Output<outputs.VirtualRouterInstanceTemplateDisk[]>;
    /**
     * When template_id was set this keeps the template sections names.
     */
    public /*out*/ readonly templateSectionNames!: pulumi.Output<{[key: string]: string}>;
    /**
     * Add custom section to the resource
     */
    public readonly templateSections!: pulumi.Output<outputs.VirtualRouterInstanceTemplateSection[] | undefined>;
    /**
     * When template_id was set this keeps the template tags.
     */
    public /*out*/ readonly templateTags!: pulumi.Output<{[key: string]: string}>;
    /**
     * Timeout (in minutes) within resource should be available. Default: 3 minutes
     *
     * @deprecated Deprecated
     */
    public readonly timeout!: pulumi.Output<number | undefined>;
    public readonly timeouts!: pulumi.Output<outputs.VirtualRouterInstanceTimeouts | undefined>;
    /**
     * ID of the user that will own the resource
     */
    public /*out*/ readonly uid!: pulumi.Output<number>;
    /**
     * Name of the user that will own the resource
     */
    public /*out*/ readonly uname!: pulumi.Output<string>;
    /**
     * Number of virtual CPUs assigned to the virtual machine
     */
    public readonly vcpu!: pulumi.Output<number>;
    /**
     * Identifier of the parent virtual router ressource
     */
    public readonly virtualRouterId!: pulumi.Output<number>;
    /**
     * Virtual Machine Group to associate with during VM creation only. If it changes, a New VM is created
     */
    public readonly vmgroup!: pulumi.Output<outputs.VirtualRouterInstanceVmgroup | undefined>;

    /**
     * Create a VirtualRouterInstance resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: VirtualRouterInstanceArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: VirtualRouterInstanceArgs | VirtualRouterInstanceState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as VirtualRouterInstanceState | undefined;
            resourceInputs["context"] = state ? state.context : undefined;
            resourceInputs["cpu"] = state ? state.cpu : undefined;
            resourceInputs["cpumodel"] = state ? state.cpumodel : undefined;
            resourceInputs["defaultTags"] = state ? state.defaultTags : undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["disks"] = state ? state.disks : undefined;
            resourceInputs["gid"] = state ? state.gid : undefined;
            resourceInputs["gname"] = state ? state.gname : undefined;
            resourceInputs["graphics"] = state ? state.graphics : undefined;
            resourceInputs["group"] = state ? state.group : undefined;
            resourceInputs["hardShutdown"] = state ? state.hardShutdown : undefined;
            resourceInputs["lcmstate"] = state ? state.lcmstate : undefined;
            resourceInputs["lock"] = state ? state.lock : undefined;
            resourceInputs["memory"] = state ? state.memory : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["onDiskChange"] = state ? state.onDiskChange : undefined;
            resourceInputs["os"] = state ? state.os : undefined;
            resourceInputs["pending"] = state ? state.pending : undefined;
            resourceInputs["permissions"] = state ? state.permissions : undefined;
            resourceInputs["raw"] = state ? state.raw : undefined;
            resourceInputs["schedDsRequirements"] = state ? state.schedDsRequirements : undefined;
            resourceInputs["schedRequirements"] = state ? state.schedRequirements : undefined;
            resourceInputs["state"] = state ? state.state : undefined;
            resourceInputs["tags"] = state ? state.tags : undefined;
            resourceInputs["tagsAll"] = state ? state.tagsAll : undefined;
            resourceInputs["templateDisks"] = state ? state.templateDisks : undefined;
            resourceInputs["templateSectionNames"] = state ? state.templateSectionNames : undefined;
            resourceInputs["templateSections"] = state ? state.templateSections : undefined;
            resourceInputs["templateTags"] = state ? state.templateTags : undefined;
            resourceInputs["timeout"] = state ? state.timeout : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
            resourceInputs["uid"] = state ? state.uid : undefined;
            resourceInputs["uname"] = state ? state.uname : undefined;
            resourceInputs["vcpu"] = state ? state.vcpu : undefined;
            resourceInputs["virtualRouterId"] = state ? state.virtualRouterId : undefined;
            resourceInputs["vmgroup"] = state ? state.vmgroup : undefined;
        } else {
            const args = argsOrState as VirtualRouterInstanceArgs | undefined;
            if ((!args || args.virtualRouterId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'virtualRouterId'");
            }
            resourceInputs["context"] = args ? args.context : undefined;
            resourceInputs["cpu"] = args ? args.cpu : undefined;
            resourceInputs["cpumodel"] = args ? args.cpumodel : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["disks"] = args ? args.disks : undefined;
            resourceInputs["graphics"] = args ? args.graphics : undefined;
            resourceInputs["group"] = args ? args.group : undefined;
            resourceInputs["hardShutdown"] = args ? args.hardShutdown : undefined;
            resourceInputs["lock"] = args ? args.lock : undefined;
            resourceInputs["memory"] = args ? args.memory : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["onDiskChange"] = args ? args.onDiskChange : undefined;
            resourceInputs["os"] = args ? args.os : undefined;
            resourceInputs["pending"] = args ? args.pending : undefined;
            resourceInputs["permissions"] = args ? args.permissions : undefined;
            resourceInputs["raw"] = args ? args.raw : undefined;
            resourceInputs["schedDsRequirements"] = args ? args.schedDsRequirements : undefined;
            resourceInputs["schedRequirements"] = args ? args.schedRequirements : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["templateSections"] = args ? args.templateSections : undefined;
            resourceInputs["timeout"] = args ? args.timeout : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
            resourceInputs["vcpu"] = args ? args.vcpu : undefined;
            resourceInputs["virtualRouterId"] = args ? args.virtualRouterId : undefined;
            resourceInputs["vmgroup"] = args ? args.vmgroup : undefined;
            resourceInputs["defaultTags"] = undefined /*out*/;
            resourceInputs["gid"] = undefined /*out*/;
            resourceInputs["gname"] = undefined /*out*/;
            resourceInputs["lcmstate"] = undefined /*out*/;
            resourceInputs["state"] = undefined /*out*/;
            resourceInputs["tagsAll"] = undefined /*out*/;
            resourceInputs["templateDisks"] = undefined /*out*/;
            resourceInputs["templateSectionNames"] = undefined /*out*/;
            resourceInputs["templateTags"] = undefined /*out*/;
            resourceInputs["uid"] = undefined /*out*/;
            resourceInputs["uname"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(VirtualRouterInstance.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering VirtualRouterInstance resources.
 */
export interface VirtualRouterInstanceState {
    /**
     * Context variables
     */
    context?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Amount of CPU quota assigned to the virtual machine
     */
    cpu?: pulumi.Input<number>;
    /**
     * Definition of CPU Model type for the Virtual Machine
     */
    cpumodel?: pulumi.Input<inputs.VirtualRouterInstanceCpumodel>;
    /**
     * Default tags defined in the provider configuration
     */
    defaultTags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * A description of the entity
     */
    description?: pulumi.Input<string>;
    /**
     * Definition of disks assigned to the Virtual Machine
     */
    disks?: pulumi.Input<pulumi.Input<inputs.VirtualRouterInstanceDisk>[]>;
    /**
     * ID of the group that will own the resource
     */
    gid?: pulumi.Input<number>;
    /**
     * Name of the group that will own the resource
     */
    gname?: pulumi.Input<string>;
    /**
     * Definition of graphics adapter assigned to the Virtual Machine
     */
    graphics?: pulumi.Input<inputs.VirtualRouterInstanceGraphics>;
    /**
     * Name of the Group that onws the resource, If empty, it uses caller group
     */
    group?: pulumi.Input<string>;
    /**
     * Immediately poweroff/terminate/reboot/undeploy the VM. (default: false)
     */
    hardShutdown?: pulumi.Input<boolean>;
    /**
     * Current LCM state of the VM
     */
    lcmstate?: pulumi.Input<number>;
    /**
     * Lock level of the new resource: USE, MANAGE, ADMIN, ALL, UNLOCK
     */
    lock?: pulumi.Input<string>;
    /**
     * Amount of memory (RAM) in MB assigned to the virtual machine
     */
    memory?: pulumi.Input<number>;
    /**
     * Name of the VM. If empty, defaults to 'templatename-<vmid>'
     */
    name?: pulumi.Input<string>;
    onDiskChange?: pulumi.Input<string>;
    /**
     * Definition of OS boot and type for the Virtual Machine
     */
    os?: pulumi.Input<inputs.VirtualRouterInstanceOs>;
    /**
     * Pending state of the VM during its creation, by default it is set to false
     */
    pending?: pulumi.Input<boolean>;
    /**
     * Permissions for the resource (in Unix format, owner-group-other, use-manage-admin)
     */
    permissions?: pulumi.Input<string>;
    /**
     * Low-level hypervisor tuning
     */
    raw?: pulumi.Input<inputs.VirtualRouterInstanceRaw>;
    /**
     * Storage placement requirements to deploy the resource following specific rule
     */
    schedDsRequirements?: pulumi.Input<string>;
    /**
     * Scheduling requirements to deploy the resource following specific rule
     */
    schedRequirements?: pulumi.Input<string>;
    /**
     * Current state of the VM
     */
    state?: pulumi.Input<number>;
    /**
     * Add custom tags to the resource
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Result of the applied default_tags and resource tags
     */
    tagsAll?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Disks assigned to the Virtual Machine via a template
     */
    templateDisks?: pulumi.Input<pulumi.Input<inputs.VirtualRouterInstanceTemplateDisk>[]>;
    /**
     * When template_id was set this keeps the template sections names.
     */
    templateSectionNames?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Add custom section to the resource
     */
    templateSections?: pulumi.Input<pulumi.Input<inputs.VirtualRouterInstanceTemplateSection>[]>;
    /**
     * When template_id was set this keeps the template tags.
     */
    templateTags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Timeout (in minutes) within resource should be available. Default: 3 minutes
     *
     * @deprecated Deprecated
     */
    timeout?: pulumi.Input<number>;
    timeouts?: pulumi.Input<inputs.VirtualRouterInstanceTimeouts>;
    /**
     * ID of the user that will own the resource
     */
    uid?: pulumi.Input<number>;
    /**
     * Name of the user that will own the resource
     */
    uname?: pulumi.Input<string>;
    /**
     * Number of virtual CPUs assigned to the virtual machine
     */
    vcpu?: pulumi.Input<number>;
    /**
     * Identifier of the parent virtual router ressource
     */
    virtualRouterId?: pulumi.Input<number>;
    /**
     * Virtual Machine Group to associate with during VM creation only. If it changes, a New VM is created
     */
    vmgroup?: pulumi.Input<inputs.VirtualRouterInstanceVmgroup>;
}

/**
 * The set of arguments for constructing a VirtualRouterInstance resource.
 */
export interface VirtualRouterInstanceArgs {
    /**
     * Context variables
     */
    context?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Amount of CPU quota assigned to the virtual machine
     */
    cpu?: pulumi.Input<number>;
    /**
     * Definition of CPU Model type for the Virtual Machine
     */
    cpumodel?: pulumi.Input<inputs.VirtualRouterInstanceCpumodel>;
    /**
     * A description of the entity
     */
    description?: pulumi.Input<string>;
    /**
     * Definition of disks assigned to the Virtual Machine
     */
    disks?: pulumi.Input<pulumi.Input<inputs.VirtualRouterInstanceDisk>[]>;
    /**
     * Definition of graphics adapter assigned to the Virtual Machine
     */
    graphics?: pulumi.Input<inputs.VirtualRouterInstanceGraphics>;
    /**
     * Name of the Group that onws the resource, If empty, it uses caller group
     */
    group?: pulumi.Input<string>;
    /**
     * Immediately poweroff/terminate/reboot/undeploy the VM. (default: false)
     */
    hardShutdown?: pulumi.Input<boolean>;
    /**
     * Lock level of the new resource: USE, MANAGE, ADMIN, ALL, UNLOCK
     */
    lock?: pulumi.Input<string>;
    /**
     * Amount of memory (RAM) in MB assigned to the virtual machine
     */
    memory?: pulumi.Input<number>;
    /**
     * Name of the VM. If empty, defaults to 'templatename-<vmid>'
     */
    name?: pulumi.Input<string>;
    onDiskChange?: pulumi.Input<string>;
    /**
     * Definition of OS boot and type for the Virtual Machine
     */
    os?: pulumi.Input<inputs.VirtualRouterInstanceOs>;
    /**
     * Pending state of the VM during its creation, by default it is set to false
     */
    pending?: pulumi.Input<boolean>;
    /**
     * Permissions for the resource (in Unix format, owner-group-other, use-manage-admin)
     */
    permissions?: pulumi.Input<string>;
    /**
     * Low-level hypervisor tuning
     */
    raw?: pulumi.Input<inputs.VirtualRouterInstanceRaw>;
    /**
     * Storage placement requirements to deploy the resource following specific rule
     */
    schedDsRequirements?: pulumi.Input<string>;
    /**
     * Scheduling requirements to deploy the resource following specific rule
     */
    schedRequirements?: pulumi.Input<string>;
    /**
     * Add custom tags to the resource
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Add custom section to the resource
     */
    templateSections?: pulumi.Input<pulumi.Input<inputs.VirtualRouterInstanceTemplateSection>[]>;
    /**
     * Timeout (in minutes) within resource should be available. Default: 3 minutes
     *
     * @deprecated Deprecated
     */
    timeout?: pulumi.Input<number>;
    timeouts?: pulumi.Input<inputs.VirtualRouterInstanceTimeouts>;
    /**
     * Number of virtual CPUs assigned to the virtual machine
     */
    vcpu?: pulumi.Input<number>;
    /**
     * Identifier of the parent virtual router ressource
     */
    virtualRouterId: pulumi.Input<number>;
    /**
     * Virtual Machine Group to associate with during VM creation only. If it changes, a New VM is created
     */
    vmgroup?: pulumi.Input<inputs.VirtualRouterInstanceVmgroup>;
}
