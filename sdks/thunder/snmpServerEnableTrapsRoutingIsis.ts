// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class SnmpServerEnableTrapsRoutingIsis extends pulumi.CustomResource {
    /**
     * Get an existing SnmpServerEnableTrapsRoutingIsis resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: SnmpServerEnableTrapsRoutingIsisState, opts?: pulumi.CustomResourceOptions): SnmpServerEnableTrapsRoutingIsis {
        return new SnmpServerEnableTrapsRoutingIsis(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'thunder:index/snmpServerEnableTrapsRoutingIsis:SnmpServerEnableTrapsRoutingIsis';

    /**
     * Returns true if the given object is an instance of SnmpServerEnableTrapsRoutingIsis.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is SnmpServerEnableTrapsRoutingIsis {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === SnmpServerEnableTrapsRoutingIsis.__pulumiType;
    }

    /**
     * Enable isisAdjacencyChange traps
     */
    public readonly isisadjacencychange!: pulumi.Output<number | undefined>;
    /**
     * Enable isisAreaMismatch traps
     */
    public readonly isisareamismatch!: pulumi.Output<number | undefined>;
    /**
     * Enable isisAttemptToExceedMaxSequence traps
     */
    public readonly isisattempttoexceedmaxsequence!: pulumi.Output<number | undefined>;
    /**
     * Enable isisAuthenticationFailure traps
     */
    public readonly isisauthenticationfailure!: pulumi.Output<number | undefined>;
    /**
     * Enable isisAuthenticationTypeFailure traps
     */
    public readonly isisauthenticationtypefailure!: pulumi.Output<number | undefined>;
    /**
     * Enable isisCorruptedLSPDetected traps
     */
    public readonly isiscorruptedlspdetected!: pulumi.Output<number | undefined>;
    /**
     * Enable isisDatabaseOverload traps
     */
    public readonly isisdatabaseoverload!: pulumi.Output<number | undefined>;
    /**
     * Enable isisIDLenMismatch traps
     */
    public readonly isisidlenmismatch!: pulumi.Output<number | undefined>;
    /**
     * Enable isisLSPErrorDetected traps
     */
    public readonly isislsperrordetected!: pulumi.Output<number | undefined>;
    /**
     * Enable isisLSPTooLargeToPropagate traps
     */
    public readonly isislsptoolargetopropagate!: pulumi.Output<number | undefined>;
    /**
     * Enable isisManualAddressDrops traps
     */
    public readonly isismanualaddressdrops!: pulumi.Output<number | undefined>;
    /**
     * Enable isisMaxAreaAddressesMismatch traps
     */
    public readonly isismaxareaaddressesmismatch!: pulumi.Output<number | undefined>;
    /**
     * Enable isisOriginatingLSPBufferSizeMismatch traps
     */
    public readonly isisoriginatinglspbuffersizemismatch!: pulumi.Output<number | undefined>;
    /**
     * Enable isisOwnLSPPurge traps
     */
    public readonly isisownlsppurge!: pulumi.Output<number | undefined>;
    /**
     * Enable isisProtocolsSupportedMismatch traps
     */
    public readonly isisprotocolssupportedmismatch!: pulumi.Output<number | undefined>;
    /**
     * Enable isisRejectedAdjacency traps
     */
    public readonly isisrejectedadjacency!: pulumi.Output<number | undefined>;
    /**
     * Enable isisSequenceNumberSkip traps
     */
    public readonly isissequencenumberskip!: pulumi.Output<number | undefined>;
    /**
     * Enable isisVersionSkew traps
     */
    public readonly isisversionskew!: pulumi.Output<number | undefined>;
    /**
     * uuid of the object
     */
    public readonly uuid!: pulumi.Output<string>;

    /**
     * Create a SnmpServerEnableTrapsRoutingIsis resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: SnmpServerEnableTrapsRoutingIsisArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: SnmpServerEnableTrapsRoutingIsisArgs | SnmpServerEnableTrapsRoutingIsisState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as SnmpServerEnableTrapsRoutingIsisState | undefined;
            resourceInputs["isisadjacencychange"] = state ? state.isisadjacencychange : undefined;
            resourceInputs["isisareamismatch"] = state ? state.isisareamismatch : undefined;
            resourceInputs["isisattempttoexceedmaxsequence"] = state ? state.isisattempttoexceedmaxsequence : undefined;
            resourceInputs["isisauthenticationfailure"] = state ? state.isisauthenticationfailure : undefined;
            resourceInputs["isisauthenticationtypefailure"] = state ? state.isisauthenticationtypefailure : undefined;
            resourceInputs["isiscorruptedlspdetected"] = state ? state.isiscorruptedlspdetected : undefined;
            resourceInputs["isisdatabaseoverload"] = state ? state.isisdatabaseoverload : undefined;
            resourceInputs["isisidlenmismatch"] = state ? state.isisidlenmismatch : undefined;
            resourceInputs["isislsperrordetected"] = state ? state.isislsperrordetected : undefined;
            resourceInputs["isislsptoolargetopropagate"] = state ? state.isislsptoolargetopropagate : undefined;
            resourceInputs["isismanualaddressdrops"] = state ? state.isismanualaddressdrops : undefined;
            resourceInputs["isismaxareaaddressesmismatch"] = state ? state.isismaxareaaddressesmismatch : undefined;
            resourceInputs["isisoriginatinglspbuffersizemismatch"] = state ? state.isisoriginatinglspbuffersizemismatch : undefined;
            resourceInputs["isisownlsppurge"] = state ? state.isisownlsppurge : undefined;
            resourceInputs["isisprotocolssupportedmismatch"] = state ? state.isisprotocolssupportedmismatch : undefined;
            resourceInputs["isisrejectedadjacency"] = state ? state.isisrejectedadjacency : undefined;
            resourceInputs["isissequencenumberskip"] = state ? state.isissequencenumberskip : undefined;
            resourceInputs["isisversionskew"] = state ? state.isisversionskew : undefined;
            resourceInputs["uuid"] = state ? state.uuid : undefined;
        } else {
            const args = argsOrState as SnmpServerEnableTrapsRoutingIsisArgs | undefined;
            resourceInputs["isisadjacencychange"] = args ? args.isisadjacencychange : undefined;
            resourceInputs["isisareamismatch"] = args ? args.isisareamismatch : undefined;
            resourceInputs["isisattempttoexceedmaxsequence"] = args ? args.isisattempttoexceedmaxsequence : undefined;
            resourceInputs["isisauthenticationfailure"] = args ? args.isisauthenticationfailure : undefined;
            resourceInputs["isisauthenticationtypefailure"] = args ? args.isisauthenticationtypefailure : undefined;
            resourceInputs["isiscorruptedlspdetected"] = args ? args.isiscorruptedlspdetected : undefined;
            resourceInputs["isisdatabaseoverload"] = args ? args.isisdatabaseoverload : undefined;
            resourceInputs["isisidlenmismatch"] = args ? args.isisidlenmismatch : undefined;
            resourceInputs["isislsperrordetected"] = args ? args.isislsperrordetected : undefined;
            resourceInputs["isislsptoolargetopropagate"] = args ? args.isislsptoolargetopropagate : undefined;
            resourceInputs["isismanualaddressdrops"] = args ? args.isismanualaddressdrops : undefined;
            resourceInputs["isismaxareaaddressesmismatch"] = args ? args.isismaxareaaddressesmismatch : undefined;
            resourceInputs["isisoriginatinglspbuffersizemismatch"] = args ? args.isisoriginatinglspbuffersizemismatch : undefined;
            resourceInputs["isisownlsppurge"] = args ? args.isisownlsppurge : undefined;
            resourceInputs["isisprotocolssupportedmismatch"] = args ? args.isisprotocolssupportedmismatch : undefined;
            resourceInputs["isisrejectedadjacency"] = args ? args.isisrejectedadjacency : undefined;
            resourceInputs["isissequencenumberskip"] = args ? args.isissequencenumberskip : undefined;
            resourceInputs["isisversionskew"] = args ? args.isisversionskew : undefined;
            resourceInputs["uuid"] = args ? args.uuid : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(SnmpServerEnableTrapsRoutingIsis.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering SnmpServerEnableTrapsRoutingIsis resources.
 */
export interface SnmpServerEnableTrapsRoutingIsisState {
    /**
     * Enable isisAdjacencyChange traps
     */
    isisadjacencychange?: pulumi.Input<number>;
    /**
     * Enable isisAreaMismatch traps
     */
    isisareamismatch?: pulumi.Input<number>;
    /**
     * Enable isisAttemptToExceedMaxSequence traps
     */
    isisattempttoexceedmaxsequence?: pulumi.Input<number>;
    /**
     * Enable isisAuthenticationFailure traps
     */
    isisauthenticationfailure?: pulumi.Input<number>;
    /**
     * Enable isisAuthenticationTypeFailure traps
     */
    isisauthenticationtypefailure?: pulumi.Input<number>;
    /**
     * Enable isisCorruptedLSPDetected traps
     */
    isiscorruptedlspdetected?: pulumi.Input<number>;
    /**
     * Enable isisDatabaseOverload traps
     */
    isisdatabaseoverload?: pulumi.Input<number>;
    /**
     * Enable isisIDLenMismatch traps
     */
    isisidlenmismatch?: pulumi.Input<number>;
    /**
     * Enable isisLSPErrorDetected traps
     */
    isislsperrordetected?: pulumi.Input<number>;
    /**
     * Enable isisLSPTooLargeToPropagate traps
     */
    isislsptoolargetopropagate?: pulumi.Input<number>;
    /**
     * Enable isisManualAddressDrops traps
     */
    isismanualaddressdrops?: pulumi.Input<number>;
    /**
     * Enable isisMaxAreaAddressesMismatch traps
     */
    isismaxareaaddressesmismatch?: pulumi.Input<number>;
    /**
     * Enable isisOriginatingLSPBufferSizeMismatch traps
     */
    isisoriginatinglspbuffersizemismatch?: pulumi.Input<number>;
    /**
     * Enable isisOwnLSPPurge traps
     */
    isisownlsppurge?: pulumi.Input<number>;
    /**
     * Enable isisProtocolsSupportedMismatch traps
     */
    isisprotocolssupportedmismatch?: pulumi.Input<number>;
    /**
     * Enable isisRejectedAdjacency traps
     */
    isisrejectedadjacency?: pulumi.Input<number>;
    /**
     * Enable isisSequenceNumberSkip traps
     */
    isissequencenumberskip?: pulumi.Input<number>;
    /**
     * Enable isisVersionSkew traps
     */
    isisversionskew?: pulumi.Input<number>;
    /**
     * uuid of the object
     */
    uuid?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a SnmpServerEnableTrapsRoutingIsis resource.
 */
export interface SnmpServerEnableTrapsRoutingIsisArgs {
    /**
     * Enable isisAdjacencyChange traps
     */
    isisadjacencychange?: pulumi.Input<number>;
    /**
     * Enable isisAreaMismatch traps
     */
    isisareamismatch?: pulumi.Input<number>;
    /**
     * Enable isisAttemptToExceedMaxSequence traps
     */
    isisattempttoexceedmaxsequence?: pulumi.Input<number>;
    /**
     * Enable isisAuthenticationFailure traps
     */
    isisauthenticationfailure?: pulumi.Input<number>;
    /**
     * Enable isisAuthenticationTypeFailure traps
     */
    isisauthenticationtypefailure?: pulumi.Input<number>;
    /**
     * Enable isisCorruptedLSPDetected traps
     */
    isiscorruptedlspdetected?: pulumi.Input<number>;
    /**
     * Enable isisDatabaseOverload traps
     */
    isisdatabaseoverload?: pulumi.Input<number>;
    /**
     * Enable isisIDLenMismatch traps
     */
    isisidlenmismatch?: pulumi.Input<number>;
    /**
     * Enable isisLSPErrorDetected traps
     */
    isislsperrordetected?: pulumi.Input<number>;
    /**
     * Enable isisLSPTooLargeToPropagate traps
     */
    isislsptoolargetopropagate?: pulumi.Input<number>;
    /**
     * Enable isisManualAddressDrops traps
     */
    isismanualaddressdrops?: pulumi.Input<number>;
    /**
     * Enable isisMaxAreaAddressesMismatch traps
     */
    isismaxareaaddressesmismatch?: pulumi.Input<number>;
    /**
     * Enable isisOriginatingLSPBufferSizeMismatch traps
     */
    isisoriginatinglspbuffersizemismatch?: pulumi.Input<number>;
    /**
     * Enable isisOwnLSPPurge traps
     */
    isisownlsppurge?: pulumi.Input<number>;
    /**
     * Enable isisProtocolsSupportedMismatch traps
     */
    isisprotocolssupportedmismatch?: pulumi.Input<number>;
    /**
     * Enable isisRejectedAdjacency traps
     */
    isisrejectedadjacency?: pulumi.Input<number>;
    /**
     * Enable isisSequenceNumberSkip traps
     */
    isissequencenumberskip?: pulumi.Input<number>;
    /**
     * Enable isisVersionSkew traps
     */
    isisversionskew?: pulumi.Input<number>;
    /**
     * uuid of the object
     */
    uuid?: pulumi.Input<string>;
}
