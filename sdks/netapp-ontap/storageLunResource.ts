// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class StorageLunResource extends pulumi.CustomResource {
    /**
     * Get an existing StorageLunResource resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: StorageLunResourceState, opts?: pulumi.CustomResourceOptions): StorageLunResource {
        return new StorageLunResource(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'netapp-ontap:index/storageLunResource:StorageLunResource';

    /**
     * Returns true if the given object is an instance of StorageLunResource.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is StorageLunResource {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === StorageLunResource.__pulumiType;
    }

    /**
     * Connection profile name
     */
    public readonly cxProfileName!: pulumi.Output<string>;
    /**
     * Logical unit for lun
     */
    public readonly logicalUnit!: pulumi.Output<string>;
    /**
     * Lun name
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * OS type
     */
    public readonly osType!: pulumi.Output<string>;
    /**
     * QoS policy name
     */
    public readonly qosPolicyName!: pulumi.Output<string | undefined>;
    /**
     * Serial number for lun
     */
    public /*out*/ readonly serialNumber!: pulumi.Output<string>;
    /**
     * Size of the lun
     */
    public readonly size!: pulumi.Output<number>;
    /**
     * SVM name
     */
    public readonly svmName!: pulumi.Output<string>;
    /**
     * Volume name
     */
    public readonly volumeName!: pulumi.Output<string>;

    /**
     * Create a StorageLunResource resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: StorageLunResourceArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: StorageLunResourceArgs | StorageLunResourceState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as StorageLunResourceState | undefined;
            resourceInputs["cxProfileName"] = state ? state.cxProfileName : undefined;
            resourceInputs["logicalUnit"] = state ? state.logicalUnit : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["osType"] = state ? state.osType : undefined;
            resourceInputs["qosPolicyName"] = state ? state.qosPolicyName : undefined;
            resourceInputs["serialNumber"] = state ? state.serialNumber : undefined;
            resourceInputs["size"] = state ? state.size : undefined;
            resourceInputs["svmName"] = state ? state.svmName : undefined;
            resourceInputs["volumeName"] = state ? state.volumeName : undefined;
        } else {
            const args = argsOrState as StorageLunResourceArgs | undefined;
            if ((!args || args.cxProfileName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'cxProfileName'");
            }
            if ((!args || args.osType === undefined) && !opts.urn) {
                throw new Error("Missing required property 'osType'");
            }
            if ((!args || args.size === undefined) && !opts.urn) {
                throw new Error("Missing required property 'size'");
            }
            if ((!args || args.svmName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'svmName'");
            }
            if ((!args || args.volumeName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'volumeName'");
            }
            resourceInputs["cxProfileName"] = args ? args.cxProfileName : undefined;
            resourceInputs["logicalUnit"] = args ? args.logicalUnit : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["osType"] = args ? args.osType : undefined;
            resourceInputs["qosPolicyName"] = args ? args.qosPolicyName : undefined;
            resourceInputs["size"] = args ? args.size : undefined;
            resourceInputs["svmName"] = args ? args.svmName : undefined;
            resourceInputs["volumeName"] = args ? args.volumeName : undefined;
            resourceInputs["serialNumber"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(StorageLunResource.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering StorageLunResource resources.
 */
export interface StorageLunResourceState {
    /**
     * Connection profile name
     */
    cxProfileName?: pulumi.Input<string>;
    /**
     * Logical unit for lun
     */
    logicalUnit?: pulumi.Input<string>;
    /**
     * Lun name
     */
    name?: pulumi.Input<string>;
    /**
     * OS type
     */
    osType?: pulumi.Input<string>;
    /**
     * QoS policy name
     */
    qosPolicyName?: pulumi.Input<string>;
    /**
     * Serial number for lun
     */
    serialNumber?: pulumi.Input<string>;
    /**
     * Size of the lun
     */
    size?: pulumi.Input<number>;
    /**
     * SVM name
     */
    svmName?: pulumi.Input<string>;
    /**
     * Volume name
     */
    volumeName?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a StorageLunResource resource.
 */
export interface StorageLunResourceArgs {
    /**
     * Connection profile name
     */
    cxProfileName: pulumi.Input<string>;
    /**
     * Logical unit for lun
     */
    logicalUnit?: pulumi.Input<string>;
    /**
     * Lun name
     */
    name?: pulumi.Input<string>;
    /**
     * OS type
     */
    osType: pulumi.Input<string>;
    /**
     * QoS policy name
     */
    qosPolicyName?: pulumi.Input<string>;
    /**
     * Size of the lun
     */
    size: pulumi.Input<number>;
    /**
     * SVM name
     */
    svmName: pulumi.Input<string>;
    /**
     * Volume name
     */
    volumeName: pulumi.Input<string>;
}
