// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class MemorydbSnapshot extends pulumi.CustomResource {
    /**
     * Get an existing MemorydbSnapshot resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: MemorydbSnapshotState, opts?: pulumi.CustomResourceOptions): MemorydbSnapshot {
        return new MemorydbSnapshot(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'aws:index/memorydbSnapshot:MemorydbSnapshot';

    /**
     * Returns true if the given object is an instance of MemorydbSnapshot.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is MemorydbSnapshot {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === MemorydbSnapshot.__pulumiType;
    }

    public /*out*/ readonly arn!: pulumi.Output<string>;
    public /*out*/ readonly clusterConfigurations!: pulumi.Output<outputs.MemorydbSnapshotClusterConfiguration[]>;
    public readonly clusterName!: pulumi.Output<string>;
    public readonly kmsKeyArn!: pulumi.Output<string | undefined>;
    public readonly name!: pulumi.Output<string>;
    public readonly namePrefix!: pulumi.Output<string>;
    public /*out*/ readonly source!: pulumi.Output<string>;
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    public readonly tagsAll!: pulumi.Output<{[key: string]: string}>;
    public readonly timeouts!: pulumi.Output<outputs.MemorydbSnapshotTimeouts | undefined>;

    /**
     * Create a MemorydbSnapshot resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: MemorydbSnapshotArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: MemorydbSnapshotArgs | MemorydbSnapshotState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as MemorydbSnapshotState | undefined;
            resourceInputs["arn"] = state ? state.arn : undefined;
            resourceInputs["clusterConfigurations"] = state ? state.clusterConfigurations : undefined;
            resourceInputs["clusterName"] = state ? state.clusterName : undefined;
            resourceInputs["kmsKeyArn"] = state ? state.kmsKeyArn : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["namePrefix"] = state ? state.namePrefix : undefined;
            resourceInputs["source"] = state ? state.source : undefined;
            resourceInputs["tags"] = state ? state.tags : undefined;
            resourceInputs["tagsAll"] = state ? state.tagsAll : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
        } else {
            const args = argsOrState as MemorydbSnapshotArgs | undefined;
            if ((!args || args.clusterName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'clusterName'");
            }
            resourceInputs["clusterName"] = args ? args.clusterName : undefined;
            resourceInputs["kmsKeyArn"] = args ? args.kmsKeyArn : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["namePrefix"] = args ? args.namePrefix : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["tagsAll"] = args ? args.tagsAll : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
            resourceInputs["arn"] = undefined /*out*/;
            resourceInputs["clusterConfigurations"] = undefined /*out*/;
            resourceInputs["source"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(MemorydbSnapshot.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering MemorydbSnapshot resources.
 */
export interface MemorydbSnapshotState {
    arn?: pulumi.Input<string>;
    clusterConfigurations?: pulumi.Input<pulumi.Input<inputs.MemorydbSnapshotClusterConfiguration>[]>;
    clusterName?: pulumi.Input<string>;
    kmsKeyArn?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    namePrefix?: pulumi.Input<string>;
    source?: pulumi.Input<string>;
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    tagsAll?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    timeouts?: pulumi.Input<inputs.MemorydbSnapshotTimeouts>;
}

/**
 * The set of arguments for constructing a MemorydbSnapshot resource.
 */
export interface MemorydbSnapshotArgs {
    clusterName: pulumi.Input<string>;
    kmsKeyArn?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    namePrefix?: pulumi.Input<string>;
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    tagsAll?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    timeouts?: pulumi.Input<inputs.MemorydbSnapshotTimeouts>;
}
