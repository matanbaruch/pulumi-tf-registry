// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class IntegrationConfluentAccount extends pulumi.CustomResource {
    /**
     * Get an existing IntegrationConfluentAccount resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: IntegrationConfluentAccountState, opts?: pulumi.CustomResourceOptions): IntegrationConfluentAccount {
        return new IntegrationConfluentAccount(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'datadog:index/integrationConfluentAccount:IntegrationConfluentAccount';

    /**
     * Returns true if the given object is an instance of IntegrationConfluentAccount.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is IntegrationConfluentAccount {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === IntegrationConfluentAccount.__pulumiType;
    }

    /**
     * The API key associated with your Confluent account.
     */
    public readonly apiKey!: pulumi.Output<string>;
    /**
     * The API secret associated with your Confluent account.
     */
    public readonly apiSecret!: pulumi.Output<string>;
    /**
     * A list of strings representing tags. Can be a single key, or key-value pairs separated by a colon.
     */
    public readonly tags!: pulumi.Output<string[] | undefined>;

    /**
     * Create a IntegrationConfluentAccount resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: IntegrationConfluentAccountArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: IntegrationConfluentAccountArgs | IntegrationConfluentAccountState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as IntegrationConfluentAccountState | undefined;
            resourceInputs["apiKey"] = state ? state.apiKey : undefined;
            resourceInputs["apiSecret"] = state ? state.apiSecret : undefined;
            resourceInputs["tags"] = state ? state.tags : undefined;
        } else {
            const args = argsOrState as IntegrationConfluentAccountArgs | undefined;
            if ((!args || args.apiKey === undefined) && !opts.urn) {
                throw new Error("Missing required property 'apiKey'");
            }
            if ((!args || args.apiSecret === undefined) && !opts.urn) {
                throw new Error("Missing required property 'apiSecret'");
            }
            resourceInputs["apiKey"] = args ? args.apiKey : undefined;
            resourceInputs["apiSecret"] = args?.apiSecret ? pulumi.secret(args.apiSecret) : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const secretOpts = { additionalSecretOutputs: ["apiSecret"] };
        opts = pulumi.mergeOptions(opts, secretOpts);
        super(IntegrationConfluentAccount.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering IntegrationConfluentAccount resources.
 */
export interface IntegrationConfluentAccountState {
    /**
     * The API key associated with your Confluent account.
     */
    apiKey?: pulumi.Input<string>;
    /**
     * The API secret associated with your Confluent account.
     */
    apiSecret?: pulumi.Input<string>;
    /**
     * A list of strings representing tags. Can be a single key, or key-value pairs separated by a colon.
     */
    tags?: pulumi.Input<pulumi.Input<string>[]>;
}

/**
 * The set of arguments for constructing a IntegrationConfluentAccount resource.
 */
export interface IntegrationConfluentAccountArgs {
    /**
     * The API key associated with your Confluent account.
     */
    apiKey: pulumi.Input<string>;
    /**
     * The API secret associated with your Confluent account.
     */
    apiSecret: pulumi.Input<string>;
    /**
     * A list of strings representing tags. Can be a single key, or key-value pairs separated by a colon.
     */
    tags?: pulumi.Input<pulumi.Input<string>[]>;
}
