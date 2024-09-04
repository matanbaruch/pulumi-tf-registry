// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class ObjectFirewallProfileprotocoloptionsCifsServerkeytab extends pulumi.CustomResource {
    /**
     * Get an existing ObjectFirewallProfileprotocoloptionsCifsServerkeytab resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ObjectFirewallProfileprotocoloptionsCifsServerkeytabState, opts?: pulumi.CustomResourceOptions): ObjectFirewallProfileprotocoloptionsCifsServerkeytab {
        return new ObjectFirewallProfileprotocoloptionsCifsServerkeytab(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'fortimanager:index/objectFirewallProfileprotocoloptionsCifsServerkeytab:ObjectFirewallProfileprotocoloptionsCifsServerkeytab';

    /**
     * Returns true if the given object is an instance of ObjectFirewallProfileprotocoloptionsCifsServerkeytab.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ObjectFirewallProfileprotocoloptionsCifsServerkeytab {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ObjectFirewallProfileprotocoloptionsCifsServerkeytab.__pulumiType;
    }

    public readonly adom!: pulumi.Output<string | undefined>;
    public readonly keytab!: pulumi.Output<string | undefined>;
    public readonly passwords!: pulumi.Output<string[]>;
    public readonly principal!: pulumi.Output<string | undefined>;
    public readonly profileProtocolOptions!: pulumi.Output<string>;
    public readonly scopetype!: pulumi.Output<string | undefined>;

    /**
     * Create a ObjectFirewallProfileprotocoloptionsCifsServerkeytab resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ObjectFirewallProfileprotocoloptionsCifsServerkeytabArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ObjectFirewallProfileprotocoloptionsCifsServerkeytabArgs | ObjectFirewallProfileprotocoloptionsCifsServerkeytabState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as ObjectFirewallProfileprotocoloptionsCifsServerkeytabState | undefined;
            resourceInputs["adom"] = state ? state.adom : undefined;
            resourceInputs["keytab"] = state ? state.keytab : undefined;
            resourceInputs["passwords"] = state ? state.passwords : undefined;
            resourceInputs["principal"] = state ? state.principal : undefined;
            resourceInputs["profileProtocolOptions"] = state ? state.profileProtocolOptions : undefined;
            resourceInputs["scopetype"] = state ? state.scopetype : undefined;
        } else {
            const args = argsOrState as ObjectFirewallProfileprotocoloptionsCifsServerkeytabArgs | undefined;
            if ((!args || args.profileProtocolOptions === undefined) && !opts.urn) {
                throw new Error("Missing required property 'profileProtocolOptions'");
            }
            resourceInputs["adom"] = args ? args.adom : undefined;
            resourceInputs["keytab"] = args ? args.keytab : undefined;
            resourceInputs["passwords"] = args?.passwords ? pulumi.secret(args.passwords) : undefined;
            resourceInputs["principal"] = args ? args.principal : undefined;
            resourceInputs["profileProtocolOptions"] = args ? args.profileProtocolOptions : undefined;
            resourceInputs["scopetype"] = args ? args.scopetype : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const secretOpts = { additionalSecretOutputs: ["passwords"] };
        opts = pulumi.mergeOptions(opts, secretOpts);
        super(ObjectFirewallProfileprotocoloptionsCifsServerkeytab.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering ObjectFirewallProfileprotocoloptionsCifsServerkeytab resources.
 */
export interface ObjectFirewallProfileprotocoloptionsCifsServerkeytabState {
    adom?: pulumi.Input<string>;
    keytab?: pulumi.Input<string>;
    passwords?: pulumi.Input<pulumi.Input<string>[]>;
    principal?: pulumi.Input<string>;
    profileProtocolOptions?: pulumi.Input<string>;
    scopetype?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a ObjectFirewallProfileprotocoloptionsCifsServerkeytab resource.
 */
export interface ObjectFirewallProfileprotocoloptionsCifsServerkeytabArgs {
    adom?: pulumi.Input<string>;
    keytab?: pulumi.Input<string>;
    passwords?: pulumi.Input<pulumi.Input<string>[]>;
    principal?: pulumi.Input<string>;
    profileProtocolOptions: pulumi.Input<string>;
    scopetype?: pulumi.Input<string>;
}
