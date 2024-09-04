// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class SsoadminApplicationAccessScope extends pulumi.CustomResource {
    /**
     * Get an existing SsoadminApplicationAccessScope resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: SsoadminApplicationAccessScopeState, opts?: pulumi.CustomResourceOptions): SsoadminApplicationAccessScope {
        return new SsoadminApplicationAccessScope(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'aws:index/ssoadminApplicationAccessScope:SsoadminApplicationAccessScope';

    /**
     * Returns true if the given object is an instance of SsoadminApplicationAccessScope.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is SsoadminApplicationAccessScope {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === SsoadminApplicationAccessScope.__pulumiType;
    }

    public readonly applicationArn!: pulumi.Output<string>;
    public readonly authorizedTargets!: pulumi.Output<string[] | undefined>;
    public readonly scope!: pulumi.Output<string>;

    /**
     * Create a SsoadminApplicationAccessScope resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: SsoadminApplicationAccessScopeArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: SsoadminApplicationAccessScopeArgs | SsoadminApplicationAccessScopeState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as SsoadminApplicationAccessScopeState | undefined;
            resourceInputs["applicationArn"] = state ? state.applicationArn : undefined;
            resourceInputs["authorizedTargets"] = state ? state.authorizedTargets : undefined;
            resourceInputs["scope"] = state ? state.scope : undefined;
        } else {
            const args = argsOrState as SsoadminApplicationAccessScopeArgs | undefined;
            if ((!args || args.applicationArn === undefined) && !opts.urn) {
                throw new Error("Missing required property 'applicationArn'");
            }
            if ((!args || args.scope === undefined) && !opts.urn) {
                throw new Error("Missing required property 'scope'");
            }
            resourceInputs["applicationArn"] = args ? args.applicationArn : undefined;
            resourceInputs["authorizedTargets"] = args ? args.authorizedTargets : undefined;
            resourceInputs["scope"] = args ? args.scope : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(SsoadminApplicationAccessScope.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering SsoadminApplicationAccessScope resources.
 */
export interface SsoadminApplicationAccessScopeState {
    applicationArn?: pulumi.Input<string>;
    authorizedTargets?: pulumi.Input<pulumi.Input<string>[]>;
    scope?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a SsoadminApplicationAccessScope resource.
 */
export interface SsoadminApplicationAccessScopeArgs {
    applicationArn: pulumi.Input<string>;
    authorizedTargets?: pulumi.Input<pulumi.Input<string>[]>;
    scope: pulumi.Input<string>;
}
