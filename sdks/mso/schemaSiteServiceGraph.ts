// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class SchemaSiteServiceGraph extends pulumi.CustomResource {
    /**
     * Get an existing SchemaSiteServiceGraph resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: SchemaSiteServiceGraphState, opts?: pulumi.CustomResourceOptions): SchemaSiteServiceGraph {
        return new SchemaSiteServiceGraph(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'mso:index/schemaSiteServiceGraph:SchemaSiteServiceGraph';

    /**
     * Returns true if the given object is an instance of SchemaSiteServiceGraph.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is SchemaSiteServiceGraph {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === SchemaSiteServiceGraph.__pulumiType;
    }

    public readonly schemaId!: pulumi.Output<string>;
    public readonly serviceGraphName!: pulumi.Output<string>;
    /**
     * Configure service nodes for the service graph.
     */
    public readonly serviceNodes!: pulumi.Output<outputs.SchemaSiteServiceGraphServiceNode[]>;
    public readonly siteId!: pulumi.Output<string>;
    public readonly templateName!: pulumi.Output<string>;

    /**
     * Create a SchemaSiteServiceGraph resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: SchemaSiteServiceGraphArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: SchemaSiteServiceGraphArgs | SchemaSiteServiceGraphState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as SchemaSiteServiceGraphState | undefined;
            resourceInputs["schemaId"] = state ? state.schemaId : undefined;
            resourceInputs["serviceGraphName"] = state ? state.serviceGraphName : undefined;
            resourceInputs["serviceNodes"] = state ? state.serviceNodes : undefined;
            resourceInputs["siteId"] = state ? state.siteId : undefined;
            resourceInputs["templateName"] = state ? state.templateName : undefined;
        } else {
            const args = argsOrState as SchemaSiteServiceGraphArgs | undefined;
            if ((!args || args.schemaId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'schemaId'");
            }
            if ((!args || args.serviceGraphName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'serviceGraphName'");
            }
            if ((!args || args.serviceNodes === undefined) && !opts.urn) {
                throw new Error("Missing required property 'serviceNodes'");
            }
            if ((!args || args.siteId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'siteId'");
            }
            if ((!args || args.templateName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'templateName'");
            }
            resourceInputs["schemaId"] = args ? args.schemaId : undefined;
            resourceInputs["serviceGraphName"] = args ? args.serviceGraphName : undefined;
            resourceInputs["serviceNodes"] = args ? args.serviceNodes : undefined;
            resourceInputs["siteId"] = args ? args.siteId : undefined;
            resourceInputs["templateName"] = args ? args.templateName : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(SchemaSiteServiceGraph.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering SchemaSiteServiceGraph resources.
 */
export interface SchemaSiteServiceGraphState {
    schemaId?: pulumi.Input<string>;
    serviceGraphName?: pulumi.Input<string>;
    /**
     * Configure service nodes for the service graph.
     */
    serviceNodes?: pulumi.Input<pulumi.Input<inputs.SchemaSiteServiceGraphServiceNode>[]>;
    siteId?: pulumi.Input<string>;
    templateName?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a SchemaSiteServiceGraph resource.
 */
export interface SchemaSiteServiceGraphArgs {
    schemaId: pulumi.Input<string>;
    serviceGraphName: pulumi.Input<string>;
    /**
     * Configure service nodes for the service graph.
     */
    serviceNodes: pulumi.Input<pulumi.Input<inputs.SchemaSiteServiceGraphServiceNode>[]>;
    siteId: pulumi.Input<string>;
    templateName: pulumi.Input<string>;
}
