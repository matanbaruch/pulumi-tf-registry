// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class ArmsIntegrationExporter extends pulumi.CustomResource {
    /**
     * Get an existing ArmsIntegrationExporter resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ArmsIntegrationExporterState, opts?: pulumi.CustomResourceOptions): ArmsIntegrationExporter {
        return new ArmsIntegrationExporter(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'alicloud:index/armsIntegrationExporter:ArmsIntegrationExporter';

    /**
     * Returns true if the given object is an instance of ArmsIntegrationExporter.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ArmsIntegrationExporter {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ArmsIntegrationExporter.__pulumiType;
    }

    public readonly clusterId!: pulumi.Output<string>;
    public /*out*/ readonly instanceId!: pulumi.Output<number>;
    public readonly integrationType!: pulumi.Output<string>;
    public readonly param!: pulumi.Output<string>;
    public readonly timeouts!: pulumi.Output<outputs.ArmsIntegrationExporterTimeouts | undefined>;

    /**
     * Create a ArmsIntegrationExporter resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ArmsIntegrationExporterArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ArmsIntegrationExporterArgs | ArmsIntegrationExporterState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as ArmsIntegrationExporterState | undefined;
            resourceInputs["clusterId"] = state ? state.clusterId : undefined;
            resourceInputs["instanceId"] = state ? state.instanceId : undefined;
            resourceInputs["integrationType"] = state ? state.integrationType : undefined;
            resourceInputs["param"] = state ? state.param : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
        } else {
            const args = argsOrState as ArmsIntegrationExporterArgs | undefined;
            if ((!args || args.clusterId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'clusterId'");
            }
            if ((!args || args.integrationType === undefined) && !opts.urn) {
                throw new Error("Missing required property 'integrationType'");
            }
            if ((!args || args.param === undefined) && !opts.urn) {
                throw new Error("Missing required property 'param'");
            }
            resourceInputs["clusterId"] = args ? args.clusterId : undefined;
            resourceInputs["integrationType"] = args ? args.integrationType : undefined;
            resourceInputs["param"] = args ? args.param : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
            resourceInputs["instanceId"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(ArmsIntegrationExporter.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering ArmsIntegrationExporter resources.
 */
export interface ArmsIntegrationExporterState {
    clusterId?: pulumi.Input<string>;
    instanceId?: pulumi.Input<number>;
    integrationType?: pulumi.Input<string>;
    param?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.ArmsIntegrationExporterTimeouts>;
}

/**
 * The set of arguments for constructing a ArmsIntegrationExporter resource.
 */
export interface ArmsIntegrationExporterArgs {
    clusterId: pulumi.Input<string>;
    integrationType: pulumi.Input<string>;
    param: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.ArmsIntegrationExporterTimeouts>;
}
