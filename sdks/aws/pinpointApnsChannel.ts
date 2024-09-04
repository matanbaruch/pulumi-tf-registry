// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class PinpointApnsChannel extends pulumi.CustomResource {
    /**
     * Get an existing PinpointApnsChannel resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: PinpointApnsChannelState, opts?: pulumi.CustomResourceOptions): PinpointApnsChannel {
        return new PinpointApnsChannel(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'aws:index/pinpointApnsChannel:PinpointApnsChannel';

    /**
     * Returns true if the given object is an instance of PinpointApnsChannel.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is PinpointApnsChannel {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === PinpointApnsChannel.__pulumiType;
    }

    public readonly applicationId!: pulumi.Output<string>;
    public readonly bundleId!: pulumi.Output<string | undefined>;
    public readonly certificate!: pulumi.Output<string | undefined>;
    public readonly defaultAuthenticationMethod!: pulumi.Output<string | undefined>;
    public readonly enabled!: pulumi.Output<boolean | undefined>;
    public readonly privateKey!: pulumi.Output<string | undefined>;
    public readonly teamId!: pulumi.Output<string | undefined>;
    public readonly tokenKey!: pulumi.Output<string | undefined>;
    public readonly tokenKeyId!: pulumi.Output<string | undefined>;

    /**
     * Create a PinpointApnsChannel resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: PinpointApnsChannelArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: PinpointApnsChannelArgs | PinpointApnsChannelState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as PinpointApnsChannelState | undefined;
            resourceInputs["applicationId"] = state ? state.applicationId : undefined;
            resourceInputs["bundleId"] = state ? state.bundleId : undefined;
            resourceInputs["certificate"] = state ? state.certificate : undefined;
            resourceInputs["defaultAuthenticationMethod"] = state ? state.defaultAuthenticationMethod : undefined;
            resourceInputs["enabled"] = state ? state.enabled : undefined;
            resourceInputs["privateKey"] = state ? state.privateKey : undefined;
            resourceInputs["teamId"] = state ? state.teamId : undefined;
            resourceInputs["tokenKey"] = state ? state.tokenKey : undefined;
            resourceInputs["tokenKeyId"] = state ? state.tokenKeyId : undefined;
        } else {
            const args = argsOrState as PinpointApnsChannelArgs | undefined;
            if ((!args || args.applicationId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'applicationId'");
            }
            resourceInputs["applicationId"] = args ? args.applicationId : undefined;
            resourceInputs["bundleId"] = args?.bundleId ? pulumi.secret(args.bundleId) : undefined;
            resourceInputs["certificate"] = args?.certificate ? pulumi.secret(args.certificate) : undefined;
            resourceInputs["defaultAuthenticationMethod"] = args ? args.defaultAuthenticationMethod : undefined;
            resourceInputs["enabled"] = args ? args.enabled : undefined;
            resourceInputs["privateKey"] = args?.privateKey ? pulumi.secret(args.privateKey) : undefined;
            resourceInputs["teamId"] = args?.teamId ? pulumi.secret(args.teamId) : undefined;
            resourceInputs["tokenKey"] = args?.tokenKey ? pulumi.secret(args.tokenKey) : undefined;
            resourceInputs["tokenKeyId"] = args?.tokenKeyId ? pulumi.secret(args.tokenKeyId) : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const secretOpts = { additionalSecretOutputs: ["bundleId", "certificate", "privateKey", "teamId", "tokenKey", "tokenKeyId"] };
        opts = pulumi.mergeOptions(opts, secretOpts);
        super(PinpointApnsChannel.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering PinpointApnsChannel resources.
 */
export interface PinpointApnsChannelState {
    applicationId?: pulumi.Input<string>;
    bundleId?: pulumi.Input<string>;
    certificate?: pulumi.Input<string>;
    defaultAuthenticationMethod?: pulumi.Input<string>;
    enabled?: pulumi.Input<boolean>;
    privateKey?: pulumi.Input<string>;
    teamId?: pulumi.Input<string>;
    tokenKey?: pulumi.Input<string>;
    tokenKeyId?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a PinpointApnsChannel resource.
 */
export interface PinpointApnsChannelArgs {
    applicationId: pulumi.Input<string>;
    bundleId?: pulumi.Input<string>;
    certificate?: pulumi.Input<string>;
    defaultAuthenticationMethod?: pulumi.Input<string>;
    enabled?: pulumi.Input<boolean>;
    privateKey?: pulumi.Input<string>;
    teamId?: pulumi.Input<string>;
    tokenKey?: pulumi.Input<string>;
    tokenKeyId?: pulumi.Input<string>;
}
