// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class CaasClusterBlueprint extends pulumi.CustomResource {
    /**
     * Get an existing CaasClusterBlueprint resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: CaasClusterBlueprintState, opts?: pulumi.CustomResourceOptions): CaasClusterBlueprint {
        return new CaasClusterBlueprint(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'hpegl:index/caasClusterBlueprint:CaasClusterBlueprint';

    /**
     * Returns true if the given object is an instance of CaasClusterBlueprint.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is CaasClusterBlueprint {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === CaasClusterBlueprint.__pulumiType;
    }

    public readonly clusterProvider!: pulumi.Output<string>;
    public readonly controlPlaneCount!: pulumi.Output<number>;
    public readonly defaultStorageClass!: pulumi.Output<string>;
    public readonly kubernetesVersion!: pulumi.Output<string>;
    public readonly name!: pulumi.Output<string>;
    public readonly siteId!: pulumi.Output<string>;
    public readonly workerNodes!: pulumi.Output<outputs.CaasClusterBlueprintWorkerNode[]>;

    /**
     * Create a CaasClusterBlueprint resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: CaasClusterBlueprintArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: CaasClusterBlueprintArgs | CaasClusterBlueprintState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as CaasClusterBlueprintState | undefined;
            resourceInputs["clusterProvider"] = state ? state.clusterProvider : undefined;
            resourceInputs["controlPlaneCount"] = state ? state.controlPlaneCount : undefined;
            resourceInputs["defaultStorageClass"] = state ? state.defaultStorageClass : undefined;
            resourceInputs["kubernetesVersion"] = state ? state.kubernetesVersion : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["siteId"] = state ? state.siteId : undefined;
            resourceInputs["workerNodes"] = state ? state.workerNodes : undefined;
        } else {
            const args = argsOrState as CaasClusterBlueprintArgs | undefined;
            if ((!args || args.clusterProvider === undefined) && !opts.urn) {
                throw new Error("Missing required property 'clusterProvider'");
            }
            if ((!args || args.controlPlaneCount === undefined) && !opts.urn) {
                throw new Error("Missing required property 'controlPlaneCount'");
            }
            if ((!args || args.defaultStorageClass === undefined) && !opts.urn) {
                throw new Error("Missing required property 'defaultStorageClass'");
            }
            if ((!args || args.kubernetesVersion === undefined) && !opts.urn) {
                throw new Error("Missing required property 'kubernetesVersion'");
            }
            if ((!args || args.siteId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'siteId'");
            }
            if ((!args || args.workerNodes === undefined) && !opts.urn) {
                throw new Error("Missing required property 'workerNodes'");
            }
            resourceInputs["clusterProvider"] = args ? args.clusterProvider : undefined;
            resourceInputs["controlPlaneCount"] = args ? args.controlPlaneCount : undefined;
            resourceInputs["defaultStorageClass"] = args ? args.defaultStorageClass : undefined;
            resourceInputs["kubernetesVersion"] = args ? args.kubernetesVersion : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["siteId"] = args ? args.siteId : undefined;
            resourceInputs["workerNodes"] = args ? args.workerNodes : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(CaasClusterBlueprint.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering CaasClusterBlueprint resources.
 */
export interface CaasClusterBlueprintState {
    clusterProvider?: pulumi.Input<string>;
    controlPlaneCount?: pulumi.Input<number>;
    defaultStorageClass?: pulumi.Input<string>;
    kubernetesVersion?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    siteId?: pulumi.Input<string>;
    workerNodes?: pulumi.Input<pulumi.Input<inputs.CaasClusterBlueprintWorkerNode>[]>;
}

/**
 * The set of arguments for constructing a CaasClusterBlueprint resource.
 */
export interface CaasClusterBlueprintArgs {
    clusterProvider: pulumi.Input<string>;
    controlPlaneCount: pulumi.Input<number>;
    defaultStorageClass: pulumi.Input<string>;
    kubernetesVersion: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    siteId: pulumi.Input<string>;
    workerNodes: pulumi.Input<pulumi.Input<inputs.CaasClusterBlueprintWorkerNode>[]>;
}
