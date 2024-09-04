// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class FirewallManager extends pulumi.CustomResource {
    /**
     * Get an existing FirewallManager resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: FirewallManagerState, opts?: pulumi.CustomResourceOptions): FirewallManager {
        return new FirewallManager(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'prosimo:index/firewallManager:FirewallManager';

    /**
     * Returns true if the given object is an instance of FirewallManager.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is FirewallManager {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === FirewallManager.__pulumiType;
    }

    /**
     * Target API Key for authentication
     */
    public readonly apiKey!: pulumi.Output<string>;
    /**
     * Type of Integration, e.g: panorama
     */
    public readonly integrationType!: pulumi.Output<string>;
    /**
     * Target IP Address
     */
    public readonly ipAddress!: pulumi.Output<string>;
    /**
     * License Settings
     */
    public readonly licenseSettings!: pulumi.Output<outputs.FirewallManagerLicenseSetting[]>;
    public readonly timeouts!: pulumi.Output<outputs.FirewallManagerTimeouts | undefined>;

    /**
     * Create a FirewallManager resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: FirewallManagerArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: FirewallManagerArgs | FirewallManagerState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as FirewallManagerState | undefined;
            resourceInputs["apiKey"] = state ? state.apiKey : undefined;
            resourceInputs["integrationType"] = state ? state.integrationType : undefined;
            resourceInputs["ipAddress"] = state ? state.ipAddress : undefined;
            resourceInputs["licenseSettings"] = state ? state.licenseSettings : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
        } else {
            const args = argsOrState as FirewallManagerArgs | undefined;
            if ((!args || args.apiKey === undefined) && !opts.urn) {
                throw new Error("Missing required property 'apiKey'");
            }
            if ((!args || args.integrationType === undefined) && !opts.urn) {
                throw new Error("Missing required property 'integrationType'");
            }
            if ((!args || args.ipAddress === undefined) && !opts.urn) {
                throw new Error("Missing required property 'ipAddress'");
            }
            if ((!args || args.licenseSettings === undefined) && !opts.urn) {
                throw new Error("Missing required property 'licenseSettings'");
            }
            resourceInputs["apiKey"] = args?.apiKey ? pulumi.secret(args.apiKey) : undefined;
            resourceInputs["integrationType"] = args ? args.integrationType : undefined;
            resourceInputs["ipAddress"] = args ? args.ipAddress : undefined;
            resourceInputs["licenseSettings"] = args ? args.licenseSettings : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const secretOpts = { additionalSecretOutputs: ["apiKey"] };
        opts = pulumi.mergeOptions(opts, secretOpts);
        super(FirewallManager.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering FirewallManager resources.
 */
export interface FirewallManagerState {
    /**
     * Target API Key for authentication
     */
    apiKey?: pulumi.Input<string>;
    /**
     * Type of Integration, e.g: panorama
     */
    integrationType?: pulumi.Input<string>;
    /**
     * Target IP Address
     */
    ipAddress?: pulumi.Input<string>;
    /**
     * License Settings
     */
    licenseSettings?: pulumi.Input<pulumi.Input<inputs.FirewallManagerLicenseSetting>[]>;
    timeouts?: pulumi.Input<inputs.FirewallManagerTimeouts>;
}

/**
 * The set of arguments for constructing a FirewallManager resource.
 */
export interface FirewallManagerArgs {
    /**
     * Target API Key for authentication
     */
    apiKey: pulumi.Input<string>;
    /**
     * Type of Integration, e.g: panorama
     */
    integrationType: pulumi.Input<string>;
    /**
     * Target IP Address
     */
    ipAddress: pulumi.Input<string>;
    /**
     * License Settings
     */
    licenseSettings: pulumi.Input<pulumi.Input<inputs.FirewallManagerLicenseSetting>[]>;
    timeouts?: pulumi.Input<inputs.FirewallManagerTimeouts>;
}
