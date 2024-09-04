// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class DasbDeviceGroup extends pulumi.CustomResource {
    /**
     * Get an existing DasbDeviceGroup resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: DasbDeviceGroupState, opts?: pulumi.CustomResourceOptions): DasbDeviceGroup {
        return new DasbDeviceGroup(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'tencentcloud:index/dasbDeviceGroup:DasbDeviceGroup';

    /**
     * Returns true if the given object is an instance of DasbDeviceGroup.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is DasbDeviceGroup {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === DasbDeviceGroup.__pulumiType;
    }

    /**
     * The ID of the department to which the asset group belongs, such as: 1.2.3 name, with a maximum length of 32 characters.
     */
    public readonly departmentId!: pulumi.Output<string | undefined>;
    /**
     * Device group name, the maximum length is 32 characters.
     */
    public readonly name!: pulumi.Output<string>;

    /**
     * Create a DasbDeviceGroup resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: DasbDeviceGroupArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: DasbDeviceGroupArgs | DasbDeviceGroupState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as DasbDeviceGroupState | undefined;
            resourceInputs["departmentId"] = state ? state.departmentId : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
        } else {
            const args = argsOrState as DasbDeviceGroupArgs | undefined;
            resourceInputs["departmentId"] = args ? args.departmentId : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(DasbDeviceGroup.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering DasbDeviceGroup resources.
 */
export interface DasbDeviceGroupState {
    /**
     * The ID of the department to which the asset group belongs, such as: 1.2.3 name, with a maximum length of 32 characters.
     */
    departmentId?: pulumi.Input<string>;
    /**
     * Device group name, the maximum length is 32 characters.
     */
    name?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a DasbDeviceGroup resource.
 */
export interface DasbDeviceGroupArgs {
    /**
     * The ID of the department to which the asset group belongs, such as: 1.2.3 name, with a maximum length of 32 characters.
     */
    departmentId?: pulumi.Input<string>;
    /**
     * Device group name, the maximum length is 32 characters.
     */
    name?: pulumi.Input<string>;
}
