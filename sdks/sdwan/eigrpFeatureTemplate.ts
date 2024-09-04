// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class EigrpFeatureTemplate extends pulumi.CustomResource {
    /**
     * Get an existing EigrpFeatureTemplate resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: EigrpFeatureTemplateState, opts?: pulumi.CustomResourceOptions): EigrpFeatureTemplate {
        return new EigrpFeatureTemplate(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'sdwan:index/eigrpFeatureTemplate:EigrpFeatureTemplate';

    /**
     * Returns true if the given object is an instance of EigrpFeatureTemplate.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is EigrpFeatureTemplate {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === EigrpFeatureTemplate.__pulumiType;
    }

    /**
     * Set EIGRP address family
     */
    public readonly addressFamilies!: pulumi.Output<outputs.EigrpFeatureTemplateAddressFamily[] | undefined>;
    /**
     * Set autonomous system ID <1..65535> - Range: `1`-`65535`
     */
    public readonly asNumber!: pulumi.Output<number | undefined>;
    /**
     * Variable name
     */
    public readonly asNumberVariable!: pulumi.Output<string | undefined>;
    /**
     * Set EIGRP router authentication type - Choices: `md5`, `hmac-sha-256`
     */
    public readonly authenticationType!: pulumi.Output<string | undefined>;
    /**
     * Variable name
     */
    public readonly authenticationTypeVariable!: pulumi.Output<string | undefined>;
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
     * Selective route download - Default value: `false`
     */
    public readonly filter!: pulumi.Output<boolean | undefined>;
    /**
     * Variable name
     */
    public readonly filterVariable!: pulumi.Output<string | undefined>;
    /**
     * Set EIGRP hello interval - Range: `0`-`65535` - Default value: `5`
     */
    public readonly helloInterval!: pulumi.Output<number | undefined>;
    /**
     * Variable name
     */
    public readonly helloIntervalVariable!: pulumi.Output<string | undefined>;
    /**
     * Set hmac-sha-256 authentication key
     */
    public readonly hmacAuthenticationKey!: pulumi.Output<string | undefined>;
    /**
     * Variable name
     */
    public readonly hmacAuthenticationKeyVariable!: pulumi.Output<string | undefined>;
    /**
     * Set EIGRP hold time - Range: `0`-`65535` - Default value: `15`
     */
    public readonly holdTime!: pulumi.Output<number | undefined>;
    /**
     * Variable name
     */
    public readonly holdTimeVariable!: pulumi.Output<string | undefined>;
    /**
     * Configure IPv4 Static Routes
     */
    public readonly interfaces!: pulumi.Output<outputs.EigrpFeatureTemplateInterface[] | undefined>;
    /**
     * Set keychain name
     */
    public readonly keys!: pulumi.Output<outputs.EigrpFeatureTemplateKey[] | undefined>;
    /**
     * The name of the feature template
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * Configure policy to apply to prefixes received from EIGRP neighbor
     */
    public readonly routePolicyName!: pulumi.Output<string | undefined>;
    /**
     * Variable name
     */
    public readonly routePolicyNameVariable!: pulumi.Output<string | undefined>;
    /**
     * The template type
     */
    public /*out*/ readonly templateType!: pulumi.Output<string>;
    /**
     * The version of the feature template
     */
    public /*out*/ readonly version!: pulumi.Output<number>;

    /**
     * Create a EigrpFeatureTemplate resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: EigrpFeatureTemplateArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: EigrpFeatureTemplateArgs | EigrpFeatureTemplateState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as EigrpFeatureTemplateState | undefined;
            resourceInputs["addressFamilies"] = state ? state.addressFamilies : undefined;
            resourceInputs["asNumber"] = state ? state.asNumber : undefined;
            resourceInputs["asNumberVariable"] = state ? state.asNumberVariable : undefined;
            resourceInputs["authenticationType"] = state ? state.authenticationType : undefined;
            resourceInputs["authenticationTypeVariable"] = state ? state.authenticationTypeVariable : undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["deviceTypes"] = state ? state.deviceTypes : undefined;
            resourceInputs["filter"] = state ? state.filter : undefined;
            resourceInputs["filterVariable"] = state ? state.filterVariable : undefined;
            resourceInputs["helloInterval"] = state ? state.helloInterval : undefined;
            resourceInputs["helloIntervalVariable"] = state ? state.helloIntervalVariable : undefined;
            resourceInputs["hmacAuthenticationKey"] = state ? state.hmacAuthenticationKey : undefined;
            resourceInputs["hmacAuthenticationKeyVariable"] = state ? state.hmacAuthenticationKeyVariable : undefined;
            resourceInputs["holdTime"] = state ? state.holdTime : undefined;
            resourceInputs["holdTimeVariable"] = state ? state.holdTimeVariable : undefined;
            resourceInputs["interfaces"] = state ? state.interfaces : undefined;
            resourceInputs["keys"] = state ? state.keys : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["routePolicyName"] = state ? state.routePolicyName : undefined;
            resourceInputs["routePolicyNameVariable"] = state ? state.routePolicyNameVariable : undefined;
            resourceInputs["templateType"] = state ? state.templateType : undefined;
            resourceInputs["version"] = state ? state.version : undefined;
        } else {
            const args = argsOrState as EigrpFeatureTemplateArgs | undefined;
            if ((!args || args.description === undefined) && !opts.urn) {
                throw new Error("Missing required property 'description'");
            }
            if ((!args || args.deviceTypes === undefined) && !opts.urn) {
                throw new Error("Missing required property 'deviceTypes'");
            }
            resourceInputs["addressFamilies"] = args ? args.addressFamilies : undefined;
            resourceInputs["asNumber"] = args ? args.asNumber : undefined;
            resourceInputs["asNumberVariable"] = args ? args.asNumberVariable : undefined;
            resourceInputs["authenticationType"] = args ? args.authenticationType : undefined;
            resourceInputs["authenticationTypeVariable"] = args ? args.authenticationTypeVariable : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["deviceTypes"] = args ? args.deviceTypes : undefined;
            resourceInputs["filter"] = args ? args.filter : undefined;
            resourceInputs["filterVariable"] = args ? args.filterVariable : undefined;
            resourceInputs["helloInterval"] = args ? args.helloInterval : undefined;
            resourceInputs["helloIntervalVariable"] = args ? args.helloIntervalVariable : undefined;
            resourceInputs["hmacAuthenticationKey"] = args ? args.hmacAuthenticationKey : undefined;
            resourceInputs["hmacAuthenticationKeyVariable"] = args ? args.hmacAuthenticationKeyVariable : undefined;
            resourceInputs["holdTime"] = args ? args.holdTime : undefined;
            resourceInputs["holdTimeVariable"] = args ? args.holdTimeVariable : undefined;
            resourceInputs["interfaces"] = args ? args.interfaces : undefined;
            resourceInputs["keys"] = args ? args.keys : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["routePolicyName"] = args ? args.routePolicyName : undefined;
            resourceInputs["routePolicyNameVariable"] = args ? args.routePolicyNameVariable : undefined;
            resourceInputs["templateType"] = undefined /*out*/;
            resourceInputs["version"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(EigrpFeatureTemplate.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering EigrpFeatureTemplate resources.
 */
export interface EigrpFeatureTemplateState {
    /**
     * Set EIGRP address family
     */
    addressFamilies?: pulumi.Input<pulumi.Input<inputs.EigrpFeatureTemplateAddressFamily>[]>;
    /**
     * Set autonomous system ID <1..65535> - Range: `1`-`65535`
     */
    asNumber?: pulumi.Input<number>;
    /**
     * Variable name
     */
    asNumberVariable?: pulumi.Input<string>;
    /**
     * Set EIGRP router authentication type - Choices: `md5`, `hmac-sha-256`
     */
    authenticationType?: pulumi.Input<string>;
    /**
     * Variable name
     */
    authenticationTypeVariable?: pulumi.Input<string>;
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
     * Selective route download - Default value: `false`
     */
    filter?: pulumi.Input<boolean>;
    /**
     * Variable name
     */
    filterVariable?: pulumi.Input<string>;
    /**
     * Set EIGRP hello interval - Range: `0`-`65535` - Default value: `5`
     */
    helloInterval?: pulumi.Input<number>;
    /**
     * Variable name
     */
    helloIntervalVariable?: pulumi.Input<string>;
    /**
     * Set hmac-sha-256 authentication key
     */
    hmacAuthenticationKey?: pulumi.Input<string>;
    /**
     * Variable name
     */
    hmacAuthenticationKeyVariable?: pulumi.Input<string>;
    /**
     * Set EIGRP hold time - Range: `0`-`65535` - Default value: `15`
     */
    holdTime?: pulumi.Input<number>;
    /**
     * Variable name
     */
    holdTimeVariable?: pulumi.Input<string>;
    /**
     * Configure IPv4 Static Routes
     */
    interfaces?: pulumi.Input<pulumi.Input<inputs.EigrpFeatureTemplateInterface>[]>;
    /**
     * Set keychain name
     */
    keys?: pulumi.Input<pulumi.Input<inputs.EigrpFeatureTemplateKey>[]>;
    /**
     * The name of the feature template
     */
    name?: pulumi.Input<string>;
    /**
     * Configure policy to apply to prefixes received from EIGRP neighbor
     */
    routePolicyName?: pulumi.Input<string>;
    /**
     * Variable name
     */
    routePolicyNameVariable?: pulumi.Input<string>;
    /**
     * The template type
     */
    templateType?: pulumi.Input<string>;
    /**
     * The version of the feature template
     */
    version?: pulumi.Input<number>;
}

/**
 * The set of arguments for constructing a EigrpFeatureTemplate resource.
 */
export interface EigrpFeatureTemplateArgs {
    /**
     * Set EIGRP address family
     */
    addressFamilies?: pulumi.Input<pulumi.Input<inputs.EigrpFeatureTemplateAddressFamily>[]>;
    /**
     * Set autonomous system ID <1..65535> - Range: `1`-`65535`
     */
    asNumber?: pulumi.Input<number>;
    /**
     * Variable name
     */
    asNumberVariable?: pulumi.Input<string>;
    /**
     * Set EIGRP router authentication type - Choices: `md5`, `hmac-sha-256`
     */
    authenticationType?: pulumi.Input<string>;
    /**
     * Variable name
     */
    authenticationTypeVariable?: pulumi.Input<string>;
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
     * Selective route download - Default value: `false`
     */
    filter?: pulumi.Input<boolean>;
    /**
     * Variable name
     */
    filterVariable?: pulumi.Input<string>;
    /**
     * Set EIGRP hello interval - Range: `0`-`65535` - Default value: `5`
     */
    helloInterval?: pulumi.Input<number>;
    /**
     * Variable name
     */
    helloIntervalVariable?: pulumi.Input<string>;
    /**
     * Set hmac-sha-256 authentication key
     */
    hmacAuthenticationKey?: pulumi.Input<string>;
    /**
     * Variable name
     */
    hmacAuthenticationKeyVariable?: pulumi.Input<string>;
    /**
     * Set EIGRP hold time - Range: `0`-`65535` - Default value: `15`
     */
    holdTime?: pulumi.Input<number>;
    /**
     * Variable name
     */
    holdTimeVariable?: pulumi.Input<string>;
    /**
     * Configure IPv4 Static Routes
     */
    interfaces?: pulumi.Input<pulumi.Input<inputs.EigrpFeatureTemplateInterface>[]>;
    /**
     * Set keychain name
     */
    keys?: pulumi.Input<pulumi.Input<inputs.EigrpFeatureTemplateKey>[]>;
    /**
     * The name of the feature template
     */
    name?: pulumi.Input<string>;
    /**
     * Configure policy to apply to prefixes received from EIGRP neighbor
     */
    routePolicyName?: pulumi.Input<string>;
    /**
     * Variable name
     */
    routePolicyNameVariable?: pulumi.Input<string>;
}
