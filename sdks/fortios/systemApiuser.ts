// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class SystemApiuser extends pulumi.CustomResource {
    /**
     * Get an existing SystemApiuser resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: SystemApiuserState, opts?: pulumi.CustomResourceOptions): SystemApiuser {
        return new SystemApiuser(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'fortios:index/systemApiuser:SystemApiuser';

    /**
     * Returns true if the given object is an instance of SystemApiuser.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is SystemApiuser {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === SystemApiuser.__pulumiType;
    }

    public readonly accprofile!: pulumi.Output<string>;
    public readonly apiKey!: pulumi.Output<string | undefined>;
    public readonly comments!: pulumi.Output<string | undefined>;
    public readonly corsAllowOrigin!: pulumi.Output<string>;
    public readonly dynamicSortSubtable!: pulumi.Output<string | undefined>;
    public readonly getAllTables!: pulumi.Output<string | undefined>;
    public readonly name!: pulumi.Output<string>;
    public readonly peerAuth!: pulumi.Output<string>;
    public readonly peerGroup!: pulumi.Output<string>;
    public readonly schedule!: pulumi.Output<string>;
    public readonly trusthosts!: pulumi.Output<outputs.SystemApiuserTrusthost[] | undefined>;
    public readonly vdomparam!: pulumi.Output<string>;
    public readonly vdoms!: pulumi.Output<outputs.SystemApiuserVdom[] | undefined>;

    /**
     * Create a SystemApiuser resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: SystemApiuserArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: SystemApiuserArgs | SystemApiuserState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as SystemApiuserState | undefined;
            resourceInputs["accprofile"] = state ? state.accprofile : undefined;
            resourceInputs["apiKey"] = state ? state.apiKey : undefined;
            resourceInputs["comments"] = state ? state.comments : undefined;
            resourceInputs["corsAllowOrigin"] = state ? state.corsAllowOrigin : undefined;
            resourceInputs["dynamicSortSubtable"] = state ? state.dynamicSortSubtable : undefined;
            resourceInputs["getAllTables"] = state ? state.getAllTables : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["peerAuth"] = state ? state.peerAuth : undefined;
            resourceInputs["peerGroup"] = state ? state.peerGroup : undefined;
            resourceInputs["schedule"] = state ? state.schedule : undefined;
            resourceInputs["trusthosts"] = state ? state.trusthosts : undefined;
            resourceInputs["vdomparam"] = state ? state.vdomparam : undefined;
            resourceInputs["vdoms"] = state ? state.vdoms : undefined;
        } else {
            const args = argsOrState as SystemApiuserArgs | undefined;
            if ((!args || args.accprofile === undefined) && !opts.urn) {
                throw new Error("Missing required property 'accprofile'");
            }
            resourceInputs["accprofile"] = args ? args.accprofile : undefined;
            resourceInputs["apiKey"] = args?.apiKey ? pulumi.secret(args.apiKey) : undefined;
            resourceInputs["comments"] = args ? args.comments : undefined;
            resourceInputs["corsAllowOrigin"] = args ? args.corsAllowOrigin : undefined;
            resourceInputs["dynamicSortSubtable"] = args ? args.dynamicSortSubtable : undefined;
            resourceInputs["getAllTables"] = args ? args.getAllTables : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["peerAuth"] = args ? args.peerAuth : undefined;
            resourceInputs["peerGroup"] = args ? args.peerGroup : undefined;
            resourceInputs["schedule"] = args ? args.schedule : undefined;
            resourceInputs["trusthosts"] = args ? args.trusthosts : undefined;
            resourceInputs["vdomparam"] = args ? args.vdomparam : undefined;
            resourceInputs["vdoms"] = args ? args.vdoms : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const secretOpts = { additionalSecretOutputs: ["apiKey"] };
        opts = pulumi.mergeOptions(opts, secretOpts);
        super(SystemApiuser.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering SystemApiuser resources.
 */
export interface SystemApiuserState {
    accprofile?: pulumi.Input<string>;
    apiKey?: pulumi.Input<string>;
    comments?: pulumi.Input<string>;
    corsAllowOrigin?: pulumi.Input<string>;
    dynamicSortSubtable?: pulumi.Input<string>;
    getAllTables?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    peerAuth?: pulumi.Input<string>;
    peerGroup?: pulumi.Input<string>;
    schedule?: pulumi.Input<string>;
    trusthosts?: pulumi.Input<pulumi.Input<inputs.SystemApiuserTrusthost>[]>;
    vdomparam?: pulumi.Input<string>;
    vdoms?: pulumi.Input<pulumi.Input<inputs.SystemApiuserVdom>[]>;
}

/**
 * The set of arguments for constructing a SystemApiuser resource.
 */
export interface SystemApiuserArgs {
    accprofile: pulumi.Input<string>;
    apiKey?: pulumi.Input<string>;
    comments?: pulumi.Input<string>;
    corsAllowOrigin?: pulumi.Input<string>;
    dynamicSortSubtable?: pulumi.Input<string>;
    getAllTables?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    peerAuth?: pulumi.Input<string>;
    peerGroup?: pulumi.Input<string>;
    schedule?: pulumi.Input<string>;
    trusthosts?: pulumi.Input<pulumi.Input<inputs.SystemApiuserTrusthost>[]>;
    vdomparam?: pulumi.Input<string>;
    vdoms?: pulumi.Input<pulumi.Input<inputs.SystemApiuserVdom>[]>;
}
