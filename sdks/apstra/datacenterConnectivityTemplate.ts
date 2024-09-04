// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class DatacenterConnectivityTemplate extends pulumi.CustomResource {
    /**
     * Get an existing DatacenterConnectivityTemplate resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: DatacenterConnectivityTemplateState, opts?: pulumi.CustomResourceOptions): DatacenterConnectivityTemplate {
        return new DatacenterConnectivityTemplate(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'apstra:index/datacenterConnectivityTemplate:DatacenterConnectivityTemplate';

    /**
     * Returns true if the given object is an instance of DatacenterConnectivityTemplate.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is DatacenterConnectivityTemplate {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === DatacenterConnectivityTemplate.__pulumiType;
    }

    /**
     * Apstra Blueprint ID.
     */
    public readonly blueprintId!: pulumi.Output<string>;
    /**
     * Description displayed in web UI.
     */
    public readonly description!: pulumi.Output<string | undefined>;
    /**
     * Name displayed in web UI.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * Set of Connectivity Template Primitives expressed as JSON strings.
     */
    public readonly primitives!: pulumi.Output<string[]>;
    /**
     * Set of Tag labels
     */
    public readonly tags!: pulumi.Output<string[] | undefined>;

    /**
     * Create a DatacenterConnectivityTemplate resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: DatacenterConnectivityTemplateArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: DatacenterConnectivityTemplateArgs | DatacenterConnectivityTemplateState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as DatacenterConnectivityTemplateState | undefined;
            resourceInputs["blueprintId"] = state ? state.blueprintId : undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["primitives"] = state ? state.primitives : undefined;
            resourceInputs["tags"] = state ? state.tags : undefined;
        } else {
            const args = argsOrState as DatacenterConnectivityTemplateArgs | undefined;
            if ((!args || args.blueprintId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'blueprintId'");
            }
            if ((!args || args.primitives === undefined) && !opts.urn) {
                throw new Error("Missing required property 'primitives'");
            }
            resourceInputs["blueprintId"] = args ? args.blueprintId : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["primitives"] = args ? args.primitives : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(DatacenterConnectivityTemplate.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering DatacenterConnectivityTemplate resources.
 */
export interface DatacenterConnectivityTemplateState {
    /**
     * Apstra Blueprint ID.
     */
    blueprintId?: pulumi.Input<string>;
    /**
     * Description displayed in web UI.
     */
    description?: pulumi.Input<string>;
    /**
     * Name displayed in web UI.
     */
    name?: pulumi.Input<string>;
    /**
     * Set of Connectivity Template Primitives expressed as JSON strings.
     */
    primitives?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Set of Tag labels
     */
    tags?: pulumi.Input<pulumi.Input<string>[]>;
}

/**
 * The set of arguments for constructing a DatacenterConnectivityTemplate resource.
 */
export interface DatacenterConnectivityTemplateArgs {
    /**
     * Apstra Blueprint ID.
     */
    blueprintId: pulumi.Input<string>;
    /**
     * Description displayed in web UI.
     */
    description?: pulumi.Input<string>;
    /**
     * Name displayed in web UI.
     */
    name?: pulumi.Input<string>;
    /**
     * Set of Connectivity Template Primitives expressed as JSON strings.
     */
    primitives: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Set of Tag labels
     */
    tags?: pulumi.Input<pulumi.Input<string>[]>;
}
