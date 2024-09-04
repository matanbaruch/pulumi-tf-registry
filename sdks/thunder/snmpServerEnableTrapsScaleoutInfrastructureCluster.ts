// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class SnmpServerEnableTrapsScaleoutInfrastructureCluster extends pulumi.CustomResource {
    /**
     * Get an existing SnmpServerEnableTrapsScaleoutInfrastructureCluster resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: SnmpServerEnableTrapsScaleoutInfrastructureClusterState, opts?: pulumi.CustomResourceOptions): SnmpServerEnableTrapsScaleoutInfrastructureCluster {
        return new SnmpServerEnableTrapsScaleoutInfrastructureCluster(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'thunder:index/snmpServerEnableTrapsScaleoutInfrastructureCluster:SnmpServerEnableTrapsScaleoutInfrastructureCluster';

    /**
     * Returns true if the given object is an instance of SnmpServerEnableTrapsScaleoutInfrastructureCluster.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is SnmpServerEnableTrapsScaleoutInfrastructureCluster {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === SnmpServerEnableTrapsScaleoutInfrastructureCluster.__pulumiType;
    }

    /**
     * Enable election status trap
     */
    public readonly election!: pulumi.Output<number | undefined>;
    /**
     * Enable re-election trap
     */
    public readonly masterCallingReElection!: pulumi.Output<number | undefined>;
    /**
     * Enable active node status trap
     */
    public readonly nodeStatus!: pulumi.Output<number | undefined>;
    /**
     * uuid of the object
     */
    public readonly uuid!: pulumi.Output<string>;

    /**
     * Create a SnmpServerEnableTrapsScaleoutInfrastructureCluster resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: SnmpServerEnableTrapsScaleoutInfrastructureClusterArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: SnmpServerEnableTrapsScaleoutInfrastructureClusterArgs | SnmpServerEnableTrapsScaleoutInfrastructureClusterState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as SnmpServerEnableTrapsScaleoutInfrastructureClusterState | undefined;
            resourceInputs["election"] = state ? state.election : undefined;
            resourceInputs["masterCallingReElection"] = state ? state.masterCallingReElection : undefined;
            resourceInputs["nodeStatus"] = state ? state.nodeStatus : undefined;
            resourceInputs["uuid"] = state ? state.uuid : undefined;
        } else {
            const args = argsOrState as SnmpServerEnableTrapsScaleoutInfrastructureClusterArgs | undefined;
            resourceInputs["election"] = args ? args.election : undefined;
            resourceInputs["masterCallingReElection"] = args ? args.masterCallingReElection : undefined;
            resourceInputs["nodeStatus"] = args ? args.nodeStatus : undefined;
            resourceInputs["uuid"] = args ? args.uuid : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(SnmpServerEnableTrapsScaleoutInfrastructureCluster.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering SnmpServerEnableTrapsScaleoutInfrastructureCluster resources.
 */
export interface SnmpServerEnableTrapsScaleoutInfrastructureClusterState {
    /**
     * Enable election status trap
     */
    election?: pulumi.Input<number>;
    /**
     * Enable re-election trap
     */
    masterCallingReElection?: pulumi.Input<number>;
    /**
     * Enable active node status trap
     */
    nodeStatus?: pulumi.Input<number>;
    /**
     * uuid of the object
     */
    uuid?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a SnmpServerEnableTrapsScaleoutInfrastructureCluster resource.
 */
export interface SnmpServerEnableTrapsScaleoutInfrastructureClusterArgs {
    /**
     * Enable election status trap
     */
    election?: pulumi.Input<number>;
    /**
     * Enable re-election trap
     */
    masterCallingReElection?: pulumi.Input<number>;
    /**
     * Enable active node status trap
     */
    nodeStatus?: pulumi.Input<number>;
    /**
     * uuid of the object
     */
    uuid?: pulumi.Input<string>;
}
