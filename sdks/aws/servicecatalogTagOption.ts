// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class ServicecatalogTagOption extends pulumi.CustomResource {
    /**
     * Get an existing ServicecatalogTagOption resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ServicecatalogTagOptionState, opts?: pulumi.CustomResourceOptions): ServicecatalogTagOption {
        return new ServicecatalogTagOption(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'aws:index/servicecatalogTagOption:ServicecatalogTagOption';

    /**
     * Returns true if the given object is an instance of ServicecatalogTagOption.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ServicecatalogTagOption {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ServicecatalogTagOption.__pulumiType;
    }

    public readonly active!: pulumi.Output<boolean | undefined>;
    public readonly key!: pulumi.Output<string>;
    public /*out*/ readonly owner!: pulumi.Output<string>;
    public readonly timeouts!: pulumi.Output<outputs.ServicecatalogTagOptionTimeouts | undefined>;
    public readonly value!: pulumi.Output<string>;

    /**
     * Create a ServicecatalogTagOption resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ServicecatalogTagOptionArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ServicecatalogTagOptionArgs | ServicecatalogTagOptionState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as ServicecatalogTagOptionState | undefined;
            resourceInputs["active"] = state ? state.active : undefined;
            resourceInputs["key"] = state ? state.key : undefined;
            resourceInputs["owner"] = state ? state.owner : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
            resourceInputs["value"] = state ? state.value : undefined;
        } else {
            const args = argsOrState as ServicecatalogTagOptionArgs | undefined;
            if ((!args || args.key === undefined) && !opts.urn) {
                throw new Error("Missing required property 'key'");
            }
            if ((!args || args.value === undefined) && !opts.urn) {
                throw new Error("Missing required property 'value'");
            }
            resourceInputs["active"] = args ? args.active : undefined;
            resourceInputs["key"] = args ? args.key : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
            resourceInputs["value"] = args ? args.value : undefined;
            resourceInputs["owner"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(ServicecatalogTagOption.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering ServicecatalogTagOption resources.
 */
export interface ServicecatalogTagOptionState {
    active?: pulumi.Input<boolean>;
    key?: pulumi.Input<string>;
    owner?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.ServicecatalogTagOptionTimeouts>;
    value?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a ServicecatalogTagOption resource.
 */
export interface ServicecatalogTagOptionArgs {
    active?: pulumi.Input<boolean>;
    key: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.ServicecatalogTagOptionTimeouts>;
    value: pulumi.Input<string>;
}
