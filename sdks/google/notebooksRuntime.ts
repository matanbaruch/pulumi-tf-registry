// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class NotebooksRuntime extends pulumi.CustomResource {
    /**
     * Get an existing NotebooksRuntime resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: NotebooksRuntimeState, opts?: pulumi.CustomResourceOptions): NotebooksRuntime {
        return new NotebooksRuntime(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'google:index/notebooksRuntime:NotebooksRuntime';

    /**
     * Returns true if the given object is an instance of NotebooksRuntime.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is NotebooksRuntime {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === NotebooksRuntime.__pulumiType;
    }

    /**
     * The config settings for accessing runtime.
     */
    public readonly accessConfig!: pulumi.Output<outputs.NotebooksRuntimeAccessConfig | undefined>;
    public /*out*/ readonly effectiveLabels!: pulumi.Output<{[key: string]: string}>;
    /**
     * The health state of this runtime. For a list of possible output values, see
     * 'https://cloud.google.com/vertex-ai/docs/workbench/ reference/rest/v1/projects.locations.runtimes#healthstate'.
     */
    public /*out*/ readonly healthState!: pulumi.Output<string>;
    /**
     * The labels to associate with this runtime. Label **keys** must contain 1 to 63 characters, and must conform to [RFC
     * 1035] (https://www.ietf.org/rfc/rfc1035.txt). Label **values** may be empty, but, if present, must contain 1 to 63
     * characters, and must conform to [RFC 1035](https://www.ietf.org/rfc/rfc1035.txt). No more than 32 labels can be
     * associated with a cluster. **Note**: This field is non-authoritative, and will only manage the labels present in your
     * configuration. Please refer to the field 'effective_labels' for all of the labels present on the resource.
     */
    public readonly labels!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * A reference to the zone where the machine resides.
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * Contains Runtime daemon metrics such as Service status and JupyterLab status
     */
    public /*out*/ readonly metrics!: pulumi.Output<outputs.NotebooksRuntimeMetric[]>;
    /**
     * The name specified for the Notebook runtime.
     */
    public readonly name!: pulumi.Output<string>;
    public readonly project!: pulumi.Output<string>;
    /**
     * The config settings for software inside the runtime.
     */
    public readonly softwareConfig!: pulumi.Output<outputs.NotebooksRuntimeSoftwareConfig | undefined>;
    /**
     * The state of this runtime.
     */
    public /*out*/ readonly state!: pulumi.Output<string>;
    /**
     * The combination of labels configured directly on the resource and default labels configured on the provider.
     */
    public /*out*/ readonly terraformLabels!: pulumi.Output<{[key: string]: string}>;
    public readonly timeouts!: pulumi.Output<outputs.NotebooksRuntimeTimeouts | undefined>;
    /**
     * Use a Compute Engine VM image to start the managed notebook instance.
     */
    public readonly virtualMachine!: pulumi.Output<outputs.NotebooksRuntimeVirtualMachine | undefined>;

    /**
     * Create a NotebooksRuntime resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: NotebooksRuntimeArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: NotebooksRuntimeArgs | NotebooksRuntimeState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as NotebooksRuntimeState | undefined;
            resourceInputs["accessConfig"] = state ? state.accessConfig : undefined;
            resourceInputs["effectiveLabels"] = state ? state.effectiveLabels : undefined;
            resourceInputs["healthState"] = state ? state.healthState : undefined;
            resourceInputs["labels"] = state ? state.labels : undefined;
            resourceInputs["location"] = state ? state.location : undefined;
            resourceInputs["metrics"] = state ? state.metrics : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["project"] = state ? state.project : undefined;
            resourceInputs["softwareConfig"] = state ? state.softwareConfig : undefined;
            resourceInputs["state"] = state ? state.state : undefined;
            resourceInputs["terraformLabels"] = state ? state.terraformLabels : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
            resourceInputs["virtualMachine"] = state ? state.virtualMachine : undefined;
        } else {
            const args = argsOrState as NotebooksRuntimeArgs | undefined;
            if ((!args || args.location === undefined) && !opts.urn) {
                throw new Error("Missing required property 'location'");
            }
            resourceInputs["accessConfig"] = args ? args.accessConfig : undefined;
            resourceInputs["labels"] = args ? args.labels : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["project"] = args ? args.project : undefined;
            resourceInputs["softwareConfig"] = args ? args.softwareConfig : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
            resourceInputs["virtualMachine"] = args ? args.virtualMachine : undefined;
            resourceInputs["effectiveLabels"] = undefined /*out*/;
            resourceInputs["healthState"] = undefined /*out*/;
            resourceInputs["metrics"] = undefined /*out*/;
            resourceInputs["state"] = undefined /*out*/;
            resourceInputs["terraformLabels"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(NotebooksRuntime.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering NotebooksRuntime resources.
 */
export interface NotebooksRuntimeState {
    /**
     * The config settings for accessing runtime.
     */
    accessConfig?: pulumi.Input<inputs.NotebooksRuntimeAccessConfig>;
    effectiveLabels?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * The health state of this runtime. For a list of possible output values, see
     * 'https://cloud.google.com/vertex-ai/docs/workbench/ reference/rest/v1/projects.locations.runtimes#healthstate'.
     */
    healthState?: pulumi.Input<string>;
    /**
     * The labels to associate with this runtime. Label **keys** must contain 1 to 63 characters, and must conform to [RFC
     * 1035] (https://www.ietf.org/rfc/rfc1035.txt). Label **values** may be empty, but, if present, must contain 1 to 63
     * characters, and must conform to [RFC 1035](https://www.ietf.org/rfc/rfc1035.txt). No more than 32 labels can be
     * associated with a cluster. **Note**: This field is non-authoritative, and will only manage the labels present in your
     * configuration. Please refer to the field 'effective_labels' for all of the labels present on the resource.
     */
    labels?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * A reference to the zone where the machine resides.
     */
    location?: pulumi.Input<string>;
    /**
     * Contains Runtime daemon metrics such as Service status and JupyterLab status
     */
    metrics?: pulumi.Input<pulumi.Input<inputs.NotebooksRuntimeMetric>[]>;
    /**
     * The name specified for the Notebook runtime.
     */
    name?: pulumi.Input<string>;
    project?: pulumi.Input<string>;
    /**
     * The config settings for software inside the runtime.
     */
    softwareConfig?: pulumi.Input<inputs.NotebooksRuntimeSoftwareConfig>;
    /**
     * The state of this runtime.
     */
    state?: pulumi.Input<string>;
    /**
     * The combination of labels configured directly on the resource and default labels configured on the provider.
     */
    terraformLabels?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    timeouts?: pulumi.Input<inputs.NotebooksRuntimeTimeouts>;
    /**
     * Use a Compute Engine VM image to start the managed notebook instance.
     */
    virtualMachine?: pulumi.Input<inputs.NotebooksRuntimeVirtualMachine>;
}

/**
 * The set of arguments for constructing a NotebooksRuntime resource.
 */
export interface NotebooksRuntimeArgs {
    /**
     * The config settings for accessing runtime.
     */
    accessConfig?: pulumi.Input<inputs.NotebooksRuntimeAccessConfig>;
    /**
     * The labels to associate with this runtime. Label **keys** must contain 1 to 63 characters, and must conform to [RFC
     * 1035] (https://www.ietf.org/rfc/rfc1035.txt). Label **values** may be empty, but, if present, must contain 1 to 63
     * characters, and must conform to [RFC 1035](https://www.ietf.org/rfc/rfc1035.txt). No more than 32 labels can be
     * associated with a cluster. **Note**: This field is non-authoritative, and will only manage the labels present in your
     * configuration. Please refer to the field 'effective_labels' for all of the labels present on the resource.
     */
    labels?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * A reference to the zone where the machine resides.
     */
    location: pulumi.Input<string>;
    /**
     * The name specified for the Notebook runtime.
     */
    name?: pulumi.Input<string>;
    project?: pulumi.Input<string>;
    /**
     * The config settings for software inside the runtime.
     */
    softwareConfig?: pulumi.Input<inputs.NotebooksRuntimeSoftwareConfig>;
    timeouts?: pulumi.Input<inputs.NotebooksRuntimeTimeouts>;
    /**
     * Use a Compute Engine VM image to start the managed notebook instance.
     */
    virtualMachine?: pulumi.Input<inputs.NotebooksRuntimeVirtualMachine>;
}
