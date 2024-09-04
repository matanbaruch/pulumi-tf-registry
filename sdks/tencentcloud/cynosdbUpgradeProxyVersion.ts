// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class CynosdbUpgradeProxyVersion extends pulumi.CustomResource {
    /**
     * Get an existing CynosdbUpgradeProxyVersion resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: CynosdbUpgradeProxyVersionState, opts?: pulumi.CustomResourceOptions): CynosdbUpgradeProxyVersion {
        return new CynosdbUpgradeProxyVersion(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'tencentcloud:index/cynosdbUpgradeProxyVersion:CynosdbUpgradeProxyVersion';

    /**
     * Returns true if the given object is an instance of CynosdbUpgradeProxyVersion.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is CynosdbUpgradeProxyVersion {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === CynosdbUpgradeProxyVersion.__pulumiType;
    }

    /**
     * Cluster ID.
     */
    public readonly clusterId!: pulumi.Output<string>;
    /**
     * Database Agent Upgrade Version.
     */
    public readonly dstProxyVersion!: pulumi.Output<string>;

    /**
     * Create a CynosdbUpgradeProxyVersion resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: CynosdbUpgradeProxyVersionArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: CynosdbUpgradeProxyVersionArgs | CynosdbUpgradeProxyVersionState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as CynosdbUpgradeProxyVersionState | undefined;
            resourceInputs["clusterId"] = state ? state.clusterId : undefined;
            resourceInputs["dstProxyVersion"] = state ? state.dstProxyVersion : undefined;
        } else {
            const args = argsOrState as CynosdbUpgradeProxyVersionArgs | undefined;
            if ((!args || args.clusterId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'clusterId'");
            }
            if ((!args || args.dstProxyVersion === undefined) && !opts.urn) {
                throw new Error("Missing required property 'dstProxyVersion'");
            }
            resourceInputs["clusterId"] = args ? args.clusterId : undefined;
            resourceInputs["dstProxyVersion"] = args ? args.dstProxyVersion : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(CynosdbUpgradeProxyVersion.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering CynosdbUpgradeProxyVersion resources.
 */
export interface CynosdbUpgradeProxyVersionState {
    /**
     * Cluster ID.
     */
    clusterId?: pulumi.Input<string>;
    /**
     * Database Agent Upgrade Version.
     */
    dstProxyVersion?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a CynosdbUpgradeProxyVersion resource.
 */
export interface CynosdbUpgradeProxyVersionArgs {
    /**
     * Cluster ID.
     */
    clusterId: pulumi.Input<string>;
    /**
     * Database Agent Upgrade Version.
     */
    dstProxyVersion: pulumi.Input<string>;
}
