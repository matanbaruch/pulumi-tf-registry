// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class ObjectUserFssopolling extends pulumi.CustomResource {
    /**
     * Get an existing ObjectUserFssopolling resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ObjectUserFssopollingState, opts?: pulumi.CustomResourceOptions): ObjectUserFssopolling {
        return new ObjectUserFssopolling(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'fortimanager:index/objectUserFssopolling:ObjectUserFssopolling';

    /**
     * Returns true if the given object is an instance of ObjectUserFssopolling.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ObjectUserFssopolling {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ObjectUserFssopolling.__pulumiType;
    }

    public readonly _guiMeta!: pulumi.Output<string | undefined>;
    public readonly adgrps!: pulumi.Output<outputs.ObjectUserFssopollingAdgrp[] | undefined>;
    public readonly adom!: pulumi.Output<string | undefined>;
    public readonly defaultDomain!: pulumi.Output<string | undefined>;
    public readonly dynamicSortSubtable!: pulumi.Output<string | undefined>;
    public readonly fosid!: pulumi.Output<number | undefined>;
    public readonly ldapServer!: pulumi.Output<string | undefined>;
    public readonly logonHistory!: pulumi.Output<number>;
    public readonly passwords!: pulumi.Output<string[]>;
    public readonly pollingFrequency!: pulumi.Output<number>;
    public readonly port!: pulumi.Output<number | undefined>;
    public readonly scopetype!: pulumi.Output<string | undefined>;
    public readonly server!: pulumi.Output<string | undefined>;
    public readonly smbNtlmv1Auth!: pulumi.Output<string>;
    public readonly smbv1!: pulumi.Output<string>;
    public readonly status!: pulumi.Output<string>;
    public readonly user!: pulumi.Output<string | undefined>;

    /**
     * Create a ObjectUserFssopolling resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: ObjectUserFssopollingArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ObjectUserFssopollingArgs | ObjectUserFssopollingState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as ObjectUserFssopollingState | undefined;
            resourceInputs["_guiMeta"] = state ? state._guiMeta : undefined;
            resourceInputs["adgrps"] = state ? state.adgrps : undefined;
            resourceInputs["adom"] = state ? state.adom : undefined;
            resourceInputs["defaultDomain"] = state ? state.defaultDomain : undefined;
            resourceInputs["dynamicSortSubtable"] = state ? state.dynamicSortSubtable : undefined;
            resourceInputs["fosid"] = state ? state.fosid : undefined;
            resourceInputs["ldapServer"] = state ? state.ldapServer : undefined;
            resourceInputs["logonHistory"] = state ? state.logonHistory : undefined;
            resourceInputs["passwords"] = state ? state.passwords : undefined;
            resourceInputs["pollingFrequency"] = state ? state.pollingFrequency : undefined;
            resourceInputs["port"] = state ? state.port : undefined;
            resourceInputs["scopetype"] = state ? state.scopetype : undefined;
            resourceInputs["server"] = state ? state.server : undefined;
            resourceInputs["smbNtlmv1Auth"] = state ? state.smbNtlmv1Auth : undefined;
            resourceInputs["smbv1"] = state ? state.smbv1 : undefined;
            resourceInputs["status"] = state ? state.status : undefined;
            resourceInputs["user"] = state ? state.user : undefined;
        } else {
            const args = argsOrState as ObjectUserFssopollingArgs | undefined;
            resourceInputs["_guiMeta"] = args ? args._guiMeta : undefined;
            resourceInputs["adgrps"] = args ? args.adgrps : undefined;
            resourceInputs["adom"] = args ? args.adom : undefined;
            resourceInputs["defaultDomain"] = args ? args.defaultDomain : undefined;
            resourceInputs["dynamicSortSubtable"] = args ? args.dynamicSortSubtable : undefined;
            resourceInputs["fosid"] = args ? args.fosid : undefined;
            resourceInputs["ldapServer"] = args ? args.ldapServer : undefined;
            resourceInputs["logonHistory"] = args ? args.logonHistory : undefined;
            resourceInputs["passwords"] = args?.passwords ? pulumi.secret(args.passwords) : undefined;
            resourceInputs["pollingFrequency"] = args ? args.pollingFrequency : undefined;
            resourceInputs["port"] = args ? args.port : undefined;
            resourceInputs["scopetype"] = args ? args.scopetype : undefined;
            resourceInputs["server"] = args ? args.server : undefined;
            resourceInputs["smbNtlmv1Auth"] = args ? args.smbNtlmv1Auth : undefined;
            resourceInputs["smbv1"] = args ? args.smbv1 : undefined;
            resourceInputs["status"] = args ? args.status : undefined;
            resourceInputs["user"] = args ? args.user : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const secretOpts = { additionalSecretOutputs: ["passwords"] };
        opts = pulumi.mergeOptions(opts, secretOpts);
        super(ObjectUserFssopolling.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering ObjectUserFssopolling resources.
 */
export interface ObjectUserFssopollingState {
    _guiMeta?: pulumi.Input<string>;
    adgrps?: pulumi.Input<pulumi.Input<inputs.ObjectUserFssopollingAdgrp>[]>;
    adom?: pulumi.Input<string>;
    defaultDomain?: pulumi.Input<string>;
    dynamicSortSubtable?: pulumi.Input<string>;
    fosid?: pulumi.Input<number>;
    ldapServer?: pulumi.Input<string>;
    logonHistory?: pulumi.Input<number>;
    passwords?: pulumi.Input<pulumi.Input<string>[]>;
    pollingFrequency?: pulumi.Input<number>;
    port?: pulumi.Input<number>;
    scopetype?: pulumi.Input<string>;
    server?: pulumi.Input<string>;
    smbNtlmv1Auth?: pulumi.Input<string>;
    smbv1?: pulumi.Input<string>;
    status?: pulumi.Input<string>;
    user?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a ObjectUserFssopolling resource.
 */
export interface ObjectUserFssopollingArgs {
    _guiMeta?: pulumi.Input<string>;
    adgrps?: pulumi.Input<pulumi.Input<inputs.ObjectUserFssopollingAdgrp>[]>;
    adom?: pulumi.Input<string>;
    defaultDomain?: pulumi.Input<string>;
    dynamicSortSubtable?: pulumi.Input<string>;
    fosid?: pulumi.Input<number>;
    ldapServer?: pulumi.Input<string>;
    logonHistory?: pulumi.Input<number>;
    passwords?: pulumi.Input<pulumi.Input<string>[]>;
    pollingFrequency?: pulumi.Input<number>;
    port?: pulumi.Input<number>;
    scopetype?: pulumi.Input<string>;
    server?: pulumi.Input<string>;
    smbNtlmv1Auth?: pulumi.Input<string>;
    smbv1?: pulumi.Input<string>;
    status?: pulumi.Input<string>;
    user?: pulumi.Input<string>;
}
