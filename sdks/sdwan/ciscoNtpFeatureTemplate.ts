// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class CiscoNtpFeatureTemplate extends pulumi.CustomResource {
    /**
     * Get an existing CiscoNtpFeatureTemplate resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: CiscoNtpFeatureTemplateState, opts?: pulumi.CustomResourceOptions): CiscoNtpFeatureTemplate {
        return new CiscoNtpFeatureTemplate(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'sdwan:index/ciscoNtpFeatureTemplate:CiscoNtpFeatureTemplate';

    /**
     * Returns true if the given object is an instance of CiscoNtpFeatureTemplate.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is CiscoNtpFeatureTemplate {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === CiscoNtpFeatureTemplate.__pulumiType;
    }

    /**
     * Set MD5 authentication key
     */
    public readonly authenticationKeys!: pulumi.Output<outputs.CiscoNtpFeatureTemplateAuthenticationKey[] | undefined>;
    /**
     * The description of the feature template
     */
    public readonly description!: pulumi.Output<string>;
    /**
     * List of supported device types - Choices: `vedge-C8000V`, `vedge-C8300-1N1S-4T2X`, `vedge-C8300-1N1S-6T`,
     * `vedge-C8300-2N2S-6T`, `vedge-C8300-2N2S-4T2X`, `vedge-C8500-12X4QC`, `vedge-C8500-12X`, `vedge-C8500-20X6C`,
     * `vedge-C8500L-8S4X`, `vedge-C8200-1N-4T`, `vedge-C8200L-1N-4T`
     */
    public readonly deviceTypes!: pulumi.Output<string[]>;
    /**
     * Configure device as NTP master - Default value: `false`
     */
    public readonly master!: pulumi.Output<boolean | undefined>;
    /**
     * Set interface for NTP Master
     */
    public readonly masterSourceInterface!: pulumi.Output<string | undefined>;
    /**
     * Variable name
     */
    public readonly masterSourceInterfaceVariable!: pulumi.Output<string | undefined>;
    /**
     * Master Stratum <1..15> - Range: `1`-`15`
     */
    public readonly masterStratum!: pulumi.Output<number | undefined>;
    /**
     * Variable name
     */
    public readonly masterStratumVariable!: pulumi.Output<string | undefined>;
    /**
     * Variable name
     */
    public readonly masterVariable!: pulumi.Output<string | undefined>;
    /**
     * The name of the feature template
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * Configure NTP servers
     */
    public readonly servers!: pulumi.Output<outputs.CiscoNtpFeatureTemplateServer[] | undefined>;
    /**
     * The template type
     */
    public /*out*/ readonly templateType!: pulumi.Output<string>;
    /**
     * Designate authentication key as trustworthy
     */
    public readonly trustedKeys!: pulumi.Output<number[] | undefined>;
    /**
     * Variable name
     */
    public readonly trustedKeysVariable!: pulumi.Output<string | undefined>;
    /**
     * The version of the feature template
     */
    public /*out*/ readonly version!: pulumi.Output<number>;

    /**
     * Create a CiscoNtpFeatureTemplate resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: CiscoNtpFeatureTemplateArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: CiscoNtpFeatureTemplateArgs | CiscoNtpFeatureTemplateState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as CiscoNtpFeatureTemplateState | undefined;
            resourceInputs["authenticationKeys"] = state ? state.authenticationKeys : undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["deviceTypes"] = state ? state.deviceTypes : undefined;
            resourceInputs["master"] = state ? state.master : undefined;
            resourceInputs["masterSourceInterface"] = state ? state.masterSourceInterface : undefined;
            resourceInputs["masterSourceInterfaceVariable"] = state ? state.masterSourceInterfaceVariable : undefined;
            resourceInputs["masterStratum"] = state ? state.masterStratum : undefined;
            resourceInputs["masterStratumVariable"] = state ? state.masterStratumVariable : undefined;
            resourceInputs["masterVariable"] = state ? state.masterVariable : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["servers"] = state ? state.servers : undefined;
            resourceInputs["templateType"] = state ? state.templateType : undefined;
            resourceInputs["trustedKeys"] = state ? state.trustedKeys : undefined;
            resourceInputs["trustedKeysVariable"] = state ? state.trustedKeysVariable : undefined;
            resourceInputs["version"] = state ? state.version : undefined;
        } else {
            const args = argsOrState as CiscoNtpFeatureTemplateArgs | undefined;
            if ((!args || args.description === undefined) && !opts.urn) {
                throw new Error("Missing required property 'description'");
            }
            if ((!args || args.deviceTypes === undefined) && !opts.urn) {
                throw new Error("Missing required property 'deviceTypes'");
            }
            resourceInputs["authenticationKeys"] = args ? args.authenticationKeys : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["deviceTypes"] = args ? args.deviceTypes : undefined;
            resourceInputs["master"] = args ? args.master : undefined;
            resourceInputs["masterSourceInterface"] = args ? args.masterSourceInterface : undefined;
            resourceInputs["masterSourceInterfaceVariable"] = args ? args.masterSourceInterfaceVariable : undefined;
            resourceInputs["masterStratum"] = args ? args.masterStratum : undefined;
            resourceInputs["masterStratumVariable"] = args ? args.masterStratumVariable : undefined;
            resourceInputs["masterVariable"] = args ? args.masterVariable : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["servers"] = args ? args.servers : undefined;
            resourceInputs["trustedKeys"] = args ? args.trustedKeys : undefined;
            resourceInputs["trustedKeysVariable"] = args ? args.trustedKeysVariable : undefined;
            resourceInputs["templateType"] = undefined /*out*/;
            resourceInputs["version"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(CiscoNtpFeatureTemplate.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering CiscoNtpFeatureTemplate resources.
 */
export interface CiscoNtpFeatureTemplateState {
    /**
     * Set MD5 authentication key
     */
    authenticationKeys?: pulumi.Input<pulumi.Input<inputs.CiscoNtpFeatureTemplateAuthenticationKey>[]>;
    /**
     * The description of the feature template
     */
    description?: pulumi.Input<string>;
    /**
     * List of supported device types - Choices: `vedge-C8000V`, `vedge-C8300-1N1S-4T2X`, `vedge-C8300-1N1S-6T`,
     * `vedge-C8300-2N2S-6T`, `vedge-C8300-2N2S-4T2X`, `vedge-C8500-12X4QC`, `vedge-C8500-12X`, `vedge-C8500-20X6C`,
     * `vedge-C8500L-8S4X`, `vedge-C8200-1N-4T`, `vedge-C8200L-1N-4T`
     */
    deviceTypes?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Configure device as NTP master - Default value: `false`
     */
    master?: pulumi.Input<boolean>;
    /**
     * Set interface for NTP Master
     */
    masterSourceInterface?: pulumi.Input<string>;
    /**
     * Variable name
     */
    masterSourceInterfaceVariable?: pulumi.Input<string>;
    /**
     * Master Stratum <1..15> - Range: `1`-`15`
     */
    masterStratum?: pulumi.Input<number>;
    /**
     * Variable name
     */
    masterStratumVariable?: pulumi.Input<string>;
    /**
     * Variable name
     */
    masterVariable?: pulumi.Input<string>;
    /**
     * The name of the feature template
     */
    name?: pulumi.Input<string>;
    /**
     * Configure NTP servers
     */
    servers?: pulumi.Input<pulumi.Input<inputs.CiscoNtpFeatureTemplateServer>[]>;
    /**
     * The template type
     */
    templateType?: pulumi.Input<string>;
    /**
     * Designate authentication key as trustworthy
     */
    trustedKeys?: pulumi.Input<pulumi.Input<number>[]>;
    /**
     * Variable name
     */
    trustedKeysVariable?: pulumi.Input<string>;
    /**
     * The version of the feature template
     */
    version?: pulumi.Input<number>;
}

/**
 * The set of arguments for constructing a CiscoNtpFeatureTemplate resource.
 */
export interface CiscoNtpFeatureTemplateArgs {
    /**
     * Set MD5 authentication key
     */
    authenticationKeys?: pulumi.Input<pulumi.Input<inputs.CiscoNtpFeatureTemplateAuthenticationKey>[]>;
    /**
     * The description of the feature template
     */
    description: pulumi.Input<string>;
    /**
     * List of supported device types - Choices: `vedge-C8000V`, `vedge-C8300-1N1S-4T2X`, `vedge-C8300-1N1S-6T`,
     * `vedge-C8300-2N2S-6T`, `vedge-C8300-2N2S-4T2X`, `vedge-C8500-12X4QC`, `vedge-C8500-12X`, `vedge-C8500-20X6C`,
     * `vedge-C8500L-8S4X`, `vedge-C8200-1N-4T`, `vedge-C8200L-1N-4T`
     */
    deviceTypes: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Configure device as NTP master - Default value: `false`
     */
    master?: pulumi.Input<boolean>;
    /**
     * Set interface for NTP Master
     */
    masterSourceInterface?: pulumi.Input<string>;
    /**
     * Variable name
     */
    masterSourceInterfaceVariable?: pulumi.Input<string>;
    /**
     * Master Stratum <1..15> - Range: `1`-`15`
     */
    masterStratum?: pulumi.Input<number>;
    /**
     * Variable name
     */
    masterStratumVariable?: pulumi.Input<string>;
    /**
     * Variable name
     */
    masterVariable?: pulumi.Input<string>;
    /**
     * The name of the feature template
     */
    name?: pulumi.Input<string>;
    /**
     * Configure NTP servers
     */
    servers?: pulumi.Input<pulumi.Input<inputs.CiscoNtpFeatureTemplateServer>[]>;
    /**
     * Designate authentication key as trustworthy
     */
    trustedKeys?: pulumi.Input<pulumi.Input<number>[]>;
    /**
     * Variable name
     */
    trustedKeysVariable?: pulumi.Input<string>;
}
