// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class ManagementCommandLockObject extends pulumi.CustomResource {
    /**
     * Get an existing ManagementCommandLockObject resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ManagementCommandLockObjectState, opts?: pulumi.CustomResourceOptions): ManagementCommandLockObject {
        return new ManagementCommandLockObject(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'checkpoint:index/managementCommandLockObject:ManagementCommandLockObject';

    /**
     * Returns true if the given object is an instance of ManagementCommandLockObject.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ManagementCommandLockObject {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ManagementCommandLockObject.__pulumiType;
    }

    /**
     * Object layer, need to specify the layer if the object is rule/section and uid is not supplied.
     */
    public readonly layer!: pulumi.Output<string | undefined>;
    /**
     * Object name. Must be unique in the domain.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * Object type.
     */
    public readonly type!: pulumi.Output<string | undefined>;
    /**
     * Object unique identifier.
     */
    public readonly uid!: pulumi.Output<string | undefined>;

    /**
     * Create a ManagementCommandLockObject resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: ManagementCommandLockObjectArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ManagementCommandLockObjectArgs | ManagementCommandLockObjectState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as ManagementCommandLockObjectState | undefined;
            resourceInputs["layer"] = state ? state.layer : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["type"] = state ? state.type : undefined;
            resourceInputs["uid"] = state ? state.uid : undefined;
        } else {
            const args = argsOrState as ManagementCommandLockObjectArgs | undefined;
            resourceInputs["layer"] = args ? args.layer : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["type"] = args ? args.type : undefined;
            resourceInputs["uid"] = args ? args.uid : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(ManagementCommandLockObject.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering ManagementCommandLockObject resources.
 */
export interface ManagementCommandLockObjectState {
    /**
     * Object layer, need to specify the layer if the object is rule/section and uid is not supplied.
     */
    layer?: pulumi.Input<string>;
    /**
     * Object name. Must be unique in the domain.
     */
    name?: pulumi.Input<string>;
    /**
     * Object type.
     */
    type?: pulumi.Input<string>;
    /**
     * Object unique identifier.
     */
    uid?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a ManagementCommandLockObject resource.
 */
export interface ManagementCommandLockObjectArgs {
    /**
     * Object layer, need to specify the layer if the object is rule/section and uid is not supplied.
     */
    layer?: pulumi.Input<string>;
    /**
     * Object name. Must be unique in the domain.
     */
    name?: pulumi.Input<string>;
    /**
     * Object type.
     */
    type?: pulumi.Input<string>;
    /**
     * Object unique identifier.
     */
    uid?: pulumi.Input<string>;
}
