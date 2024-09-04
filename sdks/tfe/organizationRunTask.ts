// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class OrganizationRunTask extends pulumi.CustomResource {
    /**
     * Get an existing OrganizationRunTask resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: OrganizationRunTaskState, opts?: pulumi.CustomResourceOptions): OrganizationRunTask {
        return new OrganizationRunTask(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'tfe:index/organizationRunTask:OrganizationRunTask';

    /**
     * Returns true if the given object is an instance of OrganizationRunTask.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is OrganizationRunTask {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === OrganizationRunTask.__pulumiType;
    }

    public readonly category!: pulumi.Output<string>;
    public readonly description!: pulumi.Output<string>;
    public readonly enabled!: pulumi.Output<boolean>;
    public readonly hmacKey!: pulumi.Output<string>;
    public readonly name!: pulumi.Output<string>;
    public readonly organization!: pulumi.Output<string>;
    public readonly url!: pulumi.Output<string>;

    /**
     * Create a OrganizationRunTask resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: OrganizationRunTaskArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: OrganizationRunTaskArgs | OrganizationRunTaskState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as OrganizationRunTaskState | undefined;
            resourceInputs["category"] = state ? state.category : undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["enabled"] = state ? state.enabled : undefined;
            resourceInputs["hmacKey"] = state ? state.hmacKey : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["organization"] = state ? state.organization : undefined;
            resourceInputs["url"] = state ? state.url : undefined;
        } else {
            const args = argsOrState as OrganizationRunTaskArgs | undefined;
            if ((!args || args.url === undefined) && !opts.urn) {
                throw new Error("Missing required property 'url'");
            }
            resourceInputs["category"] = args ? args.category : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["enabled"] = args ? args.enabled : undefined;
            resourceInputs["hmacKey"] = args?.hmacKey ? pulumi.secret(args.hmacKey) : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["organization"] = args ? args.organization : undefined;
            resourceInputs["url"] = args ? args.url : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const secretOpts = { additionalSecretOutputs: ["hmacKey"] };
        opts = pulumi.mergeOptions(opts, secretOpts);
        super(OrganizationRunTask.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering OrganizationRunTask resources.
 */
export interface OrganizationRunTaskState {
    category?: pulumi.Input<string>;
    description?: pulumi.Input<string>;
    enabled?: pulumi.Input<boolean>;
    hmacKey?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    organization?: pulumi.Input<string>;
    url?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a OrganizationRunTask resource.
 */
export interface OrganizationRunTaskArgs {
    category?: pulumi.Input<string>;
    description?: pulumi.Input<string>;
    enabled?: pulumi.Input<boolean>;
    hmacKey?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    organization?: pulumi.Input<string>;
    url: pulumi.Input<string>;
}
