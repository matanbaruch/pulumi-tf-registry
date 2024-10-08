// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class TemEnvironment extends pulumi.CustomResource {
    /**
     * Get an existing TemEnvironment resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: TemEnvironmentState, opts?: pulumi.CustomResourceOptions): TemEnvironment {
        return new TemEnvironment(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'tencentcloud:index/temEnvironment:TemEnvironment';

    /**
     * Returns true if the given object is an instance of TemEnvironment.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is TemEnvironment {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === TemEnvironment.__pulumiType;
    }

    /**
     * environment description.
     */
    public readonly description!: pulumi.Output<string | undefined>;
    /**
     * environment name.
     */
    public readonly environmentName!: pulumi.Output<string>;
    /**
     * subnet IDs.
     */
    public readonly subnetIds!: pulumi.Output<string[]>;
    /**
     * environment tag list.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * vpc ID.
     */
    public readonly vpc!: pulumi.Output<string>;

    /**
     * Create a TemEnvironment resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: TemEnvironmentArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: TemEnvironmentArgs | TemEnvironmentState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as TemEnvironmentState | undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["environmentName"] = state ? state.environmentName : undefined;
            resourceInputs["subnetIds"] = state ? state.subnetIds : undefined;
            resourceInputs["tags"] = state ? state.tags : undefined;
            resourceInputs["vpc"] = state ? state.vpc : undefined;
        } else {
            const args = argsOrState as TemEnvironmentArgs | undefined;
            if ((!args || args.environmentName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'environmentName'");
            }
            if ((!args || args.subnetIds === undefined) && !opts.urn) {
                throw new Error("Missing required property 'subnetIds'");
            }
            if ((!args || args.vpc === undefined) && !opts.urn) {
                throw new Error("Missing required property 'vpc'");
            }
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["environmentName"] = args ? args.environmentName : undefined;
            resourceInputs["subnetIds"] = args ? args.subnetIds : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["vpc"] = args ? args.vpc : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(TemEnvironment.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering TemEnvironment resources.
 */
export interface TemEnvironmentState {
    /**
     * environment description.
     */
    description?: pulumi.Input<string>;
    /**
     * environment name.
     */
    environmentName?: pulumi.Input<string>;
    /**
     * subnet IDs.
     */
    subnetIds?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * environment tag list.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * vpc ID.
     */
    vpc?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a TemEnvironment resource.
 */
export interface TemEnvironmentArgs {
    /**
     * environment description.
     */
    description?: pulumi.Input<string>;
    /**
     * environment name.
     */
    environmentName: pulumi.Input<string>;
    /**
     * subnet IDs.
     */
    subnetIds: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * environment tag list.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * vpc ID.
     */
    vpc: pulumi.Input<string>;
}
