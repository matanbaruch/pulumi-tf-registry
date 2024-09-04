// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class CynosdbClusterSlaveZone extends pulumi.CustomResource {
    /**
     * Get an existing CynosdbClusterSlaveZone resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: CynosdbClusterSlaveZoneState, opts?: pulumi.CustomResourceOptions): CynosdbClusterSlaveZone {
        return new CynosdbClusterSlaveZone(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'tencentcloud:index/cynosdbClusterSlaveZone:CynosdbClusterSlaveZone';

    /**
     * Returns true if the given object is an instance of CynosdbClusterSlaveZone.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is CynosdbClusterSlaveZone {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === CynosdbClusterSlaveZone.__pulumiType;
    }

    /**
     * The ID of cluster.
     */
    public readonly clusterId!: pulumi.Output<string>;
    /**
     * Slave zone.
     */
    public readonly slaveZone!: pulumi.Output<string>;
    public readonly timeouts!: pulumi.Output<outputs.CynosdbClusterSlaveZoneTimeouts | undefined>;

    /**
     * Create a CynosdbClusterSlaveZone resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: CynosdbClusterSlaveZoneArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: CynosdbClusterSlaveZoneArgs | CynosdbClusterSlaveZoneState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as CynosdbClusterSlaveZoneState | undefined;
            resourceInputs["clusterId"] = state ? state.clusterId : undefined;
            resourceInputs["slaveZone"] = state ? state.slaveZone : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
        } else {
            const args = argsOrState as CynosdbClusterSlaveZoneArgs | undefined;
            if ((!args || args.clusterId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'clusterId'");
            }
            if ((!args || args.slaveZone === undefined) && !opts.urn) {
                throw new Error("Missing required property 'slaveZone'");
            }
            resourceInputs["clusterId"] = args ? args.clusterId : undefined;
            resourceInputs["slaveZone"] = args ? args.slaveZone : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(CynosdbClusterSlaveZone.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering CynosdbClusterSlaveZone resources.
 */
export interface CynosdbClusterSlaveZoneState {
    /**
     * The ID of cluster.
     */
    clusterId?: pulumi.Input<string>;
    /**
     * Slave zone.
     */
    slaveZone?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.CynosdbClusterSlaveZoneTimeouts>;
}

/**
 * The set of arguments for constructing a CynosdbClusterSlaveZone resource.
 */
export interface CynosdbClusterSlaveZoneArgs {
    /**
     * The ID of cluster.
     */
    clusterId: pulumi.Input<string>;
    /**
     * Slave zone.
     */
    slaveZone: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.CynosdbClusterSlaveZoneTimeouts>;
}
