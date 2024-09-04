// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class SystemCertificateCrl extends pulumi.CustomResource {
    /**
     * Get an existing SystemCertificateCrl resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: SystemCertificateCrlState, opts?: pulumi.CustomResourceOptions): SystemCertificateCrl {
        return new SystemCertificateCrl(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'fortiadc:index/systemCertificateCrl:SystemCertificateCrl';

    /**
     * Returns true if the given object is an instance of SystemCertificateCrl.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is SystemCertificateCrl {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === SystemCertificateCrl.__pulumiType;
    }

    public readonly caId!: pulumi.Output<string>;
    public readonly crldpStatus!: pulumi.Output<string>;
    public readonly ldapServer!: pulumi.Output<string>;
    public readonly mkey!: pulumi.Output<string>;
    public readonly updateAheadTime!: pulumi.Output<string>;
    public readonly updateInterval!: pulumi.Output<string>;
    public readonly useCaId!: pulumi.Output<string>;
    public readonly vdom!: pulumi.Output<string | undefined>;

    /**
     * Create a SystemCertificateCrl resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: SystemCertificateCrlArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: SystemCertificateCrlArgs | SystemCertificateCrlState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as SystemCertificateCrlState | undefined;
            resourceInputs["caId"] = state ? state.caId : undefined;
            resourceInputs["crldpStatus"] = state ? state.crldpStatus : undefined;
            resourceInputs["ldapServer"] = state ? state.ldapServer : undefined;
            resourceInputs["mkey"] = state ? state.mkey : undefined;
            resourceInputs["updateAheadTime"] = state ? state.updateAheadTime : undefined;
            resourceInputs["updateInterval"] = state ? state.updateInterval : undefined;
            resourceInputs["useCaId"] = state ? state.useCaId : undefined;
            resourceInputs["vdom"] = state ? state.vdom : undefined;
        } else {
            const args = argsOrState as SystemCertificateCrlArgs | undefined;
            if ((!args || args.mkey === undefined) && !opts.urn) {
                throw new Error("Missing required property 'mkey'");
            }
            resourceInputs["caId"] = args ? args.caId : undefined;
            resourceInputs["crldpStatus"] = args ? args.crldpStatus : undefined;
            resourceInputs["ldapServer"] = args ? args.ldapServer : undefined;
            resourceInputs["mkey"] = args ? args.mkey : undefined;
            resourceInputs["updateAheadTime"] = args ? args.updateAheadTime : undefined;
            resourceInputs["updateInterval"] = args ? args.updateInterval : undefined;
            resourceInputs["useCaId"] = args ? args.useCaId : undefined;
            resourceInputs["vdom"] = args ? args.vdom : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(SystemCertificateCrl.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering SystemCertificateCrl resources.
 */
export interface SystemCertificateCrlState {
    caId?: pulumi.Input<string>;
    crldpStatus?: pulumi.Input<string>;
    ldapServer?: pulumi.Input<string>;
    mkey?: pulumi.Input<string>;
    updateAheadTime?: pulumi.Input<string>;
    updateInterval?: pulumi.Input<string>;
    useCaId?: pulumi.Input<string>;
    vdom?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a SystemCertificateCrl resource.
 */
export interface SystemCertificateCrlArgs {
    caId?: pulumi.Input<string>;
    crldpStatus?: pulumi.Input<string>;
    ldapServer?: pulumi.Input<string>;
    mkey: pulumi.Input<string>;
    updateAheadTime?: pulumi.Input<string>;
    updateInterval?: pulumi.Input<string>;
    useCaId?: pulumi.Input<string>;
    vdom?: pulumi.Input<string>;
}
