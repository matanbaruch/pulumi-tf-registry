// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class VpncertificateCa extends pulumi.CustomResource {
    /**
     * Get an existing VpncertificateCa resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: VpncertificateCaState, opts?: pulumi.CustomResourceOptions): VpncertificateCa {
        return new VpncertificateCa(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'fortios:index/vpncertificateCa:VpncertificateCa';

    /**
     * Returns true if the given object is an instance of VpncertificateCa.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is VpncertificateCa {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === VpncertificateCa.__pulumiType;
    }

    public readonly autoUpdateDays!: pulumi.Output<number>;
    public readonly autoUpdateDaysWarning!: pulumi.Output<number>;
    public readonly ca!: pulumi.Output<string>;
    public readonly caIdentifier!: pulumi.Output<string>;
    public readonly estUrl!: pulumi.Output<string>;
    public readonly fabricCa!: pulumi.Output<string>;
    public readonly lastUpdated!: pulumi.Output<number>;
    public readonly name!: pulumi.Output<string>;
    public readonly obsolete!: pulumi.Output<string>;
    public readonly range!: pulumi.Output<string>;
    public readonly scepUrl!: pulumi.Output<string>;
    public readonly source!: pulumi.Output<string>;
    public readonly sourceIp!: pulumi.Output<string>;
    public readonly sslInspectionTrusted!: pulumi.Output<string>;
    public readonly trusted!: pulumi.Output<string>;
    public readonly vdomparam!: pulumi.Output<string>;

    /**
     * Create a VpncertificateCa resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: VpncertificateCaArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: VpncertificateCaArgs | VpncertificateCaState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as VpncertificateCaState | undefined;
            resourceInputs["autoUpdateDays"] = state ? state.autoUpdateDays : undefined;
            resourceInputs["autoUpdateDaysWarning"] = state ? state.autoUpdateDaysWarning : undefined;
            resourceInputs["ca"] = state ? state.ca : undefined;
            resourceInputs["caIdentifier"] = state ? state.caIdentifier : undefined;
            resourceInputs["estUrl"] = state ? state.estUrl : undefined;
            resourceInputs["fabricCa"] = state ? state.fabricCa : undefined;
            resourceInputs["lastUpdated"] = state ? state.lastUpdated : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["obsolete"] = state ? state.obsolete : undefined;
            resourceInputs["range"] = state ? state.range : undefined;
            resourceInputs["scepUrl"] = state ? state.scepUrl : undefined;
            resourceInputs["source"] = state ? state.source : undefined;
            resourceInputs["sourceIp"] = state ? state.sourceIp : undefined;
            resourceInputs["sslInspectionTrusted"] = state ? state.sslInspectionTrusted : undefined;
            resourceInputs["trusted"] = state ? state.trusted : undefined;
            resourceInputs["vdomparam"] = state ? state.vdomparam : undefined;
        } else {
            const args = argsOrState as VpncertificateCaArgs | undefined;
            if ((!args || args.ca === undefined) && !opts.urn) {
                throw new Error("Missing required property 'ca'");
            }
            resourceInputs["autoUpdateDays"] = args ? args.autoUpdateDays : undefined;
            resourceInputs["autoUpdateDaysWarning"] = args ? args.autoUpdateDaysWarning : undefined;
            resourceInputs["ca"] = args?.ca ? pulumi.secret(args.ca) : undefined;
            resourceInputs["caIdentifier"] = args ? args.caIdentifier : undefined;
            resourceInputs["estUrl"] = args ? args.estUrl : undefined;
            resourceInputs["fabricCa"] = args ? args.fabricCa : undefined;
            resourceInputs["lastUpdated"] = args ? args.lastUpdated : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["obsolete"] = args ? args.obsolete : undefined;
            resourceInputs["range"] = args ? args.range : undefined;
            resourceInputs["scepUrl"] = args ? args.scepUrl : undefined;
            resourceInputs["source"] = args ? args.source : undefined;
            resourceInputs["sourceIp"] = args ? args.sourceIp : undefined;
            resourceInputs["sslInspectionTrusted"] = args ? args.sslInspectionTrusted : undefined;
            resourceInputs["trusted"] = args ? args.trusted : undefined;
            resourceInputs["vdomparam"] = args ? args.vdomparam : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const secretOpts = { additionalSecretOutputs: ["ca"] };
        opts = pulumi.mergeOptions(opts, secretOpts);
        super(VpncertificateCa.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering VpncertificateCa resources.
 */
export interface VpncertificateCaState {
    autoUpdateDays?: pulumi.Input<number>;
    autoUpdateDaysWarning?: pulumi.Input<number>;
    ca?: pulumi.Input<string>;
    caIdentifier?: pulumi.Input<string>;
    estUrl?: pulumi.Input<string>;
    fabricCa?: pulumi.Input<string>;
    lastUpdated?: pulumi.Input<number>;
    name?: pulumi.Input<string>;
    obsolete?: pulumi.Input<string>;
    range?: pulumi.Input<string>;
    scepUrl?: pulumi.Input<string>;
    source?: pulumi.Input<string>;
    sourceIp?: pulumi.Input<string>;
    sslInspectionTrusted?: pulumi.Input<string>;
    trusted?: pulumi.Input<string>;
    vdomparam?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a VpncertificateCa resource.
 */
export interface VpncertificateCaArgs {
    autoUpdateDays?: pulumi.Input<number>;
    autoUpdateDaysWarning?: pulumi.Input<number>;
    ca: pulumi.Input<string>;
    caIdentifier?: pulumi.Input<string>;
    estUrl?: pulumi.Input<string>;
    fabricCa?: pulumi.Input<string>;
    lastUpdated?: pulumi.Input<number>;
    name?: pulumi.Input<string>;
    obsolete?: pulumi.Input<string>;
    range?: pulumi.Input<string>;
    scepUrl?: pulumi.Input<string>;
    source?: pulumi.Input<string>;
    sourceIp?: pulumi.Input<string>;
    sslInspectionTrusted?: pulumi.Input<string>;
    trusted?: pulumi.Input<string>;
    vdomparam?: pulumi.Input<string>;
}
