// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class SentinelDataConnectorThreatIntelligenceTaxii extends pulumi.CustomResource {
    /**
     * Get an existing SentinelDataConnectorThreatIntelligenceTaxii resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: SentinelDataConnectorThreatIntelligenceTaxiiState, opts?: pulumi.CustomResourceOptions): SentinelDataConnectorThreatIntelligenceTaxii {
        return new SentinelDataConnectorThreatIntelligenceTaxii(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azurerm:index/sentinelDataConnectorThreatIntelligenceTaxii:SentinelDataConnectorThreatIntelligenceTaxii';

    /**
     * Returns true if the given object is an instance of SentinelDataConnectorThreatIntelligenceTaxii.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is SentinelDataConnectorThreatIntelligenceTaxii {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === SentinelDataConnectorThreatIntelligenceTaxii.__pulumiType;
    }

    public readonly apiRootUrl!: pulumi.Output<string>;
    public readonly collectionId!: pulumi.Output<string>;
    public readonly displayName!: pulumi.Output<string>;
    public readonly logAnalyticsWorkspaceId!: pulumi.Output<string>;
    public readonly lookbackDate!: pulumi.Output<string | undefined>;
    public readonly name!: pulumi.Output<string>;
    public readonly password!: pulumi.Output<string | undefined>;
    public readonly pollingFrequency!: pulumi.Output<string | undefined>;
    public readonly tenantId!: pulumi.Output<string>;
    public readonly timeouts!: pulumi.Output<outputs.SentinelDataConnectorThreatIntelligenceTaxiiTimeouts | undefined>;
    public readonly userName!: pulumi.Output<string | undefined>;

    /**
     * Create a SentinelDataConnectorThreatIntelligenceTaxii resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: SentinelDataConnectorThreatIntelligenceTaxiiArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: SentinelDataConnectorThreatIntelligenceTaxiiArgs | SentinelDataConnectorThreatIntelligenceTaxiiState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as SentinelDataConnectorThreatIntelligenceTaxiiState | undefined;
            resourceInputs["apiRootUrl"] = state ? state.apiRootUrl : undefined;
            resourceInputs["collectionId"] = state ? state.collectionId : undefined;
            resourceInputs["displayName"] = state ? state.displayName : undefined;
            resourceInputs["logAnalyticsWorkspaceId"] = state ? state.logAnalyticsWorkspaceId : undefined;
            resourceInputs["lookbackDate"] = state ? state.lookbackDate : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["password"] = state ? state.password : undefined;
            resourceInputs["pollingFrequency"] = state ? state.pollingFrequency : undefined;
            resourceInputs["tenantId"] = state ? state.tenantId : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
            resourceInputs["userName"] = state ? state.userName : undefined;
        } else {
            const args = argsOrState as SentinelDataConnectorThreatIntelligenceTaxiiArgs | undefined;
            if ((!args || args.apiRootUrl === undefined) && !opts.urn) {
                throw new Error("Missing required property 'apiRootUrl'");
            }
            if ((!args || args.collectionId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'collectionId'");
            }
            if ((!args || args.displayName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'displayName'");
            }
            if ((!args || args.logAnalyticsWorkspaceId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'logAnalyticsWorkspaceId'");
            }
            resourceInputs["apiRootUrl"] = args ? args.apiRootUrl : undefined;
            resourceInputs["collectionId"] = args ? args.collectionId : undefined;
            resourceInputs["displayName"] = args ? args.displayName : undefined;
            resourceInputs["logAnalyticsWorkspaceId"] = args ? args.logAnalyticsWorkspaceId : undefined;
            resourceInputs["lookbackDate"] = args ? args.lookbackDate : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["password"] = args?.password ? pulumi.secret(args.password) : undefined;
            resourceInputs["pollingFrequency"] = args ? args.pollingFrequency : undefined;
            resourceInputs["tenantId"] = args ? args.tenantId : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
            resourceInputs["userName"] = args?.userName ? pulumi.secret(args.userName) : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const secretOpts = { additionalSecretOutputs: ["password", "userName"] };
        opts = pulumi.mergeOptions(opts, secretOpts);
        super(SentinelDataConnectorThreatIntelligenceTaxii.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering SentinelDataConnectorThreatIntelligenceTaxii resources.
 */
export interface SentinelDataConnectorThreatIntelligenceTaxiiState {
    apiRootUrl?: pulumi.Input<string>;
    collectionId?: pulumi.Input<string>;
    displayName?: pulumi.Input<string>;
    logAnalyticsWorkspaceId?: pulumi.Input<string>;
    lookbackDate?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    password?: pulumi.Input<string>;
    pollingFrequency?: pulumi.Input<string>;
    tenantId?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.SentinelDataConnectorThreatIntelligenceTaxiiTimeouts>;
    userName?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a SentinelDataConnectorThreatIntelligenceTaxii resource.
 */
export interface SentinelDataConnectorThreatIntelligenceTaxiiArgs {
    apiRootUrl: pulumi.Input<string>;
    collectionId: pulumi.Input<string>;
    displayName: pulumi.Input<string>;
    logAnalyticsWorkspaceId: pulumi.Input<string>;
    lookbackDate?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    password?: pulumi.Input<string>;
    pollingFrequency?: pulumi.Input<string>;
    tenantId?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.SentinelDataConnectorThreatIntelligenceTaxiiTimeouts>;
    userName?: pulumi.Input<string>;
}
