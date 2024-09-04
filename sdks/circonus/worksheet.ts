// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class Worksheet extends pulumi.CustomResource {
    /**
     * Get an existing Worksheet resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: WorksheetState, opts?: pulumi.CustomResourceOptions): Worksheet {
        return new Worksheet(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'circonus:index/worksheet:Worksheet';

    /**
     * Returns true if the given object is an instance of Worksheet.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Worksheet {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Worksheet.__pulumiType;
    }

    public readonly description!: pulumi.Output<string | undefined>;
    public readonly favorite!: pulumi.Output<boolean | undefined>;
    public readonly graphs!: pulumi.Output<string[] | undefined>;
    public readonly notes!: pulumi.Output<string | undefined>;
    public readonly smartQueries!: pulumi.Output<outputs.WorksheetSmartQuery[] | undefined>;
    public readonly tags!: pulumi.Output<string[] | undefined>;
    public readonly title!: pulumi.Output<string>;

    /**
     * Create a Worksheet resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: WorksheetArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: WorksheetArgs | WorksheetState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as WorksheetState | undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["favorite"] = state ? state.favorite : undefined;
            resourceInputs["graphs"] = state ? state.graphs : undefined;
            resourceInputs["notes"] = state ? state.notes : undefined;
            resourceInputs["smartQueries"] = state ? state.smartQueries : undefined;
            resourceInputs["tags"] = state ? state.tags : undefined;
            resourceInputs["title"] = state ? state.title : undefined;
        } else {
            const args = argsOrState as WorksheetArgs | undefined;
            if ((!args || args.title === undefined) && !opts.urn) {
                throw new Error("Missing required property 'title'");
            }
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["favorite"] = args ? args.favorite : undefined;
            resourceInputs["graphs"] = args ? args.graphs : undefined;
            resourceInputs["notes"] = args ? args.notes : undefined;
            resourceInputs["smartQueries"] = args ? args.smartQueries : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["title"] = args ? args.title : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(Worksheet.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering Worksheet resources.
 */
export interface WorksheetState {
    description?: pulumi.Input<string>;
    favorite?: pulumi.Input<boolean>;
    graphs?: pulumi.Input<pulumi.Input<string>[]>;
    notes?: pulumi.Input<string>;
    smartQueries?: pulumi.Input<pulumi.Input<inputs.WorksheetSmartQuery>[]>;
    tags?: pulumi.Input<pulumi.Input<string>[]>;
    title?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a Worksheet resource.
 */
export interface WorksheetArgs {
    description?: pulumi.Input<string>;
    favorite?: pulumi.Input<boolean>;
    graphs?: pulumi.Input<pulumi.Input<string>[]>;
    notes?: pulumi.Input<string>;
    smartQueries?: pulumi.Input<pulumi.Input<inputs.WorksheetSmartQuery>[]>;
    tags?: pulumi.Input<pulumi.Input<string>[]>;
    title: pulumi.Input<string>;
}
