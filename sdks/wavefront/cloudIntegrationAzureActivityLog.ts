// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class CloudIntegrationAzureActivityLog extends pulumi.CustomResource {
    /**
     * Get an existing CloudIntegrationAzureActivityLog resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: CloudIntegrationAzureActivityLogState, opts?: pulumi.CustomResourceOptions): CloudIntegrationAzureActivityLog {
        return new CloudIntegrationAzureActivityLog(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'wavefront:index/cloudIntegrationAzureActivityLog:CloudIntegrationAzureActivityLog';

    /**
     * Returns true if the given object is an instance of CloudIntegrationAzureActivityLog.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is CloudIntegrationAzureActivityLog {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === CloudIntegrationAzureActivityLog.__pulumiType;
    }

    public readonly additionalTags!: pulumi.Output<{[key: string]: string} | undefined>;
    public readonly categoryFilters!: pulumi.Output<string[] | undefined>;
    public readonly clientId!: pulumi.Output<string>;
    public readonly clientSecret!: pulumi.Output<string>;
    public readonly forceSave!: pulumi.Output<boolean | undefined>;
    public readonly name!: pulumi.Output<string>;
    public readonly service!: pulumi.Output<string | undefined>;
    public readonly serviceRefreshRateInMinutes!: pulumi.Output<number | undefined>;
    public readonly tenant!: pulumi.Output<string>;

    /**
     * Create a CloudIntegrationAzureActivityLog resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: CloudIntegrationAzureActivityLogArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: CloudIntegrationAzureActivityLogArgs | CloudIntegrationAzureActivityLogState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as CloudIntegrationAzureActivityLogState | undefined;
            resourceInputs["additionalTags"] = state ? state.additionalTags : undefined;
            resourceInputs["categoryFilters"] = state ? state.categoryFilters : undefined;
            resourceInputs["clientId"] = state ? state.clientId : undefined;
            resourceInputs["clientSecret"] = state ? state.clientSecret : undefined;
            resourceInputs["forceSave"] = state ? state.forceSave : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["service"] = state ? state.service : undefined;
            resourceInputs["serviceRefreshRateInMinutes"] = state ? state.serviceRefreshRateInMinutes : undefined;
            resourceInputs["tenant"] = state ? state.tenant : undefined;
        } else {
            const args = argsOrState as CloudIntegrationAzureActivityLogArgs | undefined;
            if ((!args || args.clientId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'clientId'");
            }
            if ((!args || args.clientSecret === undefined) && !opts.urn) {
                throw new Error("Missing required property 'clientSecret'");
            }
            if ((!args || args.tenant === undefined) && !opts.urn) {
                throw new Error("Missing required property 'tenant'");
            }
            resourceInputs["additionalTags"] = args ? args.additionalTags : undefined;
            resourceInputs["categoryFilters"] = args ? args.categoryFilters : undefined;
            resourceInputs["clientId"] = args ? args.clientId : undefined;
            resourceInputs["clientSecret"] = args?.clientSecret ? pulumi.secret(args.clientSecret) : undefined;
            resourceInputs["forceSave"] = args ? args.forceSave : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["service"] = args ? args.service : undefined;
            resourceInputs["serviceRefreshRateInMinutes"] = args ? args.serviceRefreshRateInMinutes : undefined;
            resourceInputs["tenant"] = args ? args.tenant : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const secretOpts = { additionalSecretOutputs: ["clientSecret"] };
        opts = pulumi.mergeOptions(opts, secretOpts);
        super(CloudIntegrationAzureActivityLog.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering CloudIntegrationAzureActivityLog resources.
 */
export interface CloudIntegrationAzureActivityLogState {
    additionalTags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    categoryFilters?: pulumi.Input<pulumi.Input<string>[]>;
    clientId?: pulumi.Input<string>;
    clientSecret?: pulumi.Input<string>;
    forceSave?: pulumi.Input<boolean>;
    name?: pulumi.Input<string>;
    service?: pulumi.Input<string>;
    serviceRefreshRateInMinutes?: pulumi.Input<number>;
    tenant?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a CloudIntegrationAzureActivityLog resource.
 */
export interface CloudIntegrationAzureActivityLogArgs {
    additionalTags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    categoryFilters?: pulumi.Input<pulumi.Input<string>[]>;
    clientId: pulumi.Input<string>;
    clientSecret: pulumi.Input<string>;
    forceSave?: pulumi.Input<boolean>;
    name?: pulumi.Input<string>;
    service?: pulumi.Input<string>;
    serviceRefreshRateInMinutes?: pulumi.Input<number>;
    tenant: pulumi.Input<string>;
}
