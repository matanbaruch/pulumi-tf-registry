// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class ServicecatalogServiceAction extends pulumi.CustomResource {
    /**
     * Get an existing ServicecatalogServiceAction resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ServicecatalogServiceActionState, opts?: pulumi.CustomResourceOptions): ServicecatalogServiceAction {
        return new ServicecatalogServiceAction(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'aws:index/servicecatalogServiceAction:ServicecatalogServiceAction';

    /**
     * Returns true if the given object is an instance of ServicecatalogServiceAction.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ServicecatalogServiceAction {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ServicecatalogServiceAction.__pulumiType;
    }

    public readonly acceptLanguage!: pulumi.Output<string | undefined>;
    public readonly definition!: pulumi.Output<outputs.ServicecatalogServiceActionDefinition>;
    public readonly description!: pulumi.Output<string>;
    public readonly name!: pulumi.Output<string>;
    public readonly timeouts!: pulumi.Output<outputs.ServicecatalogServiceActionTimeouts | undefined>;

    /**
     * Create a ServicecatalogServiceAction resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ServicecatalogServiceActionArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ServicecatalogServiceActionArgs | ServicecatalogServiceActionState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as ServicecatalogServiceActionState | undefined;
            resourceInputs["acceptLanguage"] = state ? state.acceptLanguage : undefined;
            resourceInputs["definition"] = state ? state.definition : undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
        } else {
            const args = argsOrState as ServicecatalogServiceActionArgs | undefined;
            if ((!args || args.definition === undefined) && !opts.urn) {
                throw new Error("Missing required property 'definition'");
            }
            resourceInputs["acceptLanguage"] = args ? args.acceptLanguage : undefined;
            resourceInputs["definition"] = args ? args.definition : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(ServicecatalogServiceAction.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering ServicecatalogServiceAction resources.
 */
export interface ServicecatalogServiceActionState {
    acceptLanguage?: pulumi.Input<string>;
    definition?: pulumi.Input<inputs.ServicecatalogServiceActionDefinition>;
    description?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.ServicecatalogServiceActionTimeouts>;
}

/**
 * The set of arguments for constructing a ServicecatalogServiceAction resource.
 */
export interface ServicecatalogServiceActionArgs {
    acceptLanguage?: pulumi.Input<string>;
    definition: pulumi.Input<inputs.ServicecatalogServiceActionDefinition>;
    description?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.ServicecatalogServiceActionTimeouts>;
}
