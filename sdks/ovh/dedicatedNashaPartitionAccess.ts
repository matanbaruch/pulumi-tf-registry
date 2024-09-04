// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class DedicatedNashaPartitionAccess extends pulumi.CustomResource {
    /**
     * Get an existing DedicatedNashaPartitionAccess resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: DedicatedNashaPartitionAccessState, opts?: pulumi.CustomResourceOptions): DedicatedNashaPartitionAccess {
        return new DedicatedNashaPartitionAccess(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'ovh:index/dedicatedNashaPartitionAccess:DedicatedNashaPartitionAccess';

    /**
     * Returns true if the given object is an instance of DedicatedNashaPartitionAccess.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is DedicatedNashaPartitionAccess {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === DedicatedNashaPartitionAccess.__pulumiType;
    }

    /**
     * A brief description of the ACL
     */
    public readonly aclDescription!: pulumi.Output<string | undefined>;
    public readonly ip!: pulumi.Output<string>;
    public readonly partitionName!: pulumi.Output<string>;
    public readonly serviceName!: pulumi.Output<string>;
    public readonly type!: pulumi.Output<string | undefined>;

    /**
     * Create a DedicatedNashaPartitionAccess resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: DedicatedNashaPartitionAccessArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: DedicatedNashaPartitionAccessArgs | DedicatedNashaPartitionAccessState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as DedicatedNashaPartitionAccessState | undefined;
            resourceInputs["aclDescription"] = state ? state.aclDescription : undefined;
            resourceInputs["ip"] = state ? state.ip : undefined;
            resourceInputs["partitionName"] = state ? state.partitionName : undefined;
            resourceInputs["serviceName"] = state ? state.serviceName : undefined;
            resourceInputs["type"] = state ? state.type : undefined;
        } else {
            const args = argsOrState as DedicatedNashaPartitionAccessArgs | undefined;
            if ((!args || args.ip === undefined) && !opts.urn) {
                throw new Error("Missing required property 'ip'");
            }
            if ((!args || args.partitionName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'partitionName'");
            }
            if ((!args || args.serviceName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'serviceName'");
            }
            resourceInputs["aclDescription"] = args ? args.aclDescription : undefined;
            resourceInputs["ip"] = args ? args.ip : undefined;
            resourceInputs["partitionName"] = args ? args.partitionName : undefined;
            resourceInputs["serviceName"] = args ? args.serviceName : undefined;
            resourceInputs["type"] = args ? args.type : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(DedicatedNashaPartitionAccess.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering DedicatedNashaPartitionAccess resources.
 */
export interface DedicatedNashaPartitionAccessState {
    /**
     * A brief description of the ACL
     */
    aclDescription?: pulumi.Input<string>;
    ip?: pulumi.Input<string>;
    partitionName?: pulumi.Input<string>;
    serviceName?: pulumi.Input<string>;
    type?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a DedicatedNashaPartitionAccess resource.
 */
export interface DedicatedNashaPartitionAccessArgs {
    /**
     * A brief description of the ACL
     */
    aclDescription?: pulumi.Input<string>;
    ip: pulumi.Input<string>;
    partitionName: pulumi.Input<string>;
    serviceName: pulumi.Input<string>;
    type?: pulumi.Input<string>;
}
